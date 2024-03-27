#include "defines.h"
#include "MQTT.hpp"
#include <esp_netif.h>
#include <esp_netif_types.h>

MQTT::MQTT ()
{
  messageOutQueue = xQueueCreate (5, sizeof (MQTTMessage));
}

void MQTT::init ()
{
  // mqtt_client.setClient (client);
  mqtt_client.setServer (MQTT_BROKER_IP, MQTT_BROKER_PORT);

  //Queue to handle outbound MQTT messages
  messageOutQueue = xQueueCreate (5, sizeof (MQTTMessage));

  vTaskDelay(200 / portTICK_PERIOD_MS);

  //Ethernet.init (W5500_SCS_PIN);
  ETH.begin(1, 16, 23, 18, ETH_PHY_LAN8720);

  // https://esphome.io/components/ethernet.html
  ESP_LOGD(TAG, "Initializing Ethernet MAC for WirelessTag WT32-ETH01...");
  eth_mac_config_t mac_config = ETH_MAC_DEFAULT_CONFIG();
  mac_config.clock_config.rmii.clock_mode = EMAC_CLK_EXT_IN;
  mac_config.clock_config.rmii.clock_gpio = EMAC_CLK_IN_GPIO;
  mac_config.smi_mdc_gpio_num = 23;
  mac_config.smi_mdio_gpio_num = 18;
  mac_config.sw_reset_timeout_ms = 1000;  // from ETH.cpp
  mac = esp_eth_mac_new_esp32(&mac_config);

  ESP_LOGD(TAG, "Initializing Ethernet PHY (LAN8720A) for WT32-ETH01...");
  eth_phy_config_t phy_config = ETH_PHY_DEFAULT_CONFIG();
  phy_config.phy_addr = 1;
  phy_config.reset_gpio_num = -1;
  phy = esp_eth_phy_new_lan87xx(&phy_config);

  // Enable external oscillator (pulled down at boot to allow IO0 strapping)
  ESP_ERROR_CHECK(gpio_set_direction(GPIO_NUM_16, GPIO_MODE_OUTPUT));
  ESP_ERROR_CHECK(gpio_set_level(GPIO_NUM_16, 1));
  ESP_LOGD(TAG, "Starting Ethernet interface...");

  // Install and start Ethernet driver
  esp_eth_config_t eth_config = ETH_DEFAULT_CONFIG(mac, phy);
  esp_eth_handle_t eth_handle = nullptr;
  ESP_ERROR_CHECK(esp_eth_driver_install(&eth_config, &eth_handle));

  esp_netif_config_t const netif_config = ESP_NETIF_DEFAULT_ETH();
  global_netif = esp_netif_new(&netif_config);
  auto const eth_netif_glue = esp_eth_new_netif_glue(eth_handle);
  ESP_ERROR_CHECK(esp_netif_attach(global_netif, eth_netif_glue));
  ESP_ERROR_CHECK(esp_eth_start(eth_handle));

  reconnect();
}


void MQTT::reconnect ()
{
  // Loop until we're reconnected
  while (!mqtt_client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (mqtt_client.connect(MQTT_CLIENT_ID, MQTT_USER, MQTT_PASSWORD)) 
    {
      sendDebug("Connected");
      mqtt_client.subscribe(MQTT_PUBLISH_TOPIC_REQUEST, 1);
    } 
    else 
    {
      Serial.print("failed, rc=");
      Serial.print(mqtt_client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      vTaskDelay (5000 / portTICK_PERIOD_MS);
    }
  }
}

void MQTT::sendMessage (String topic, String payload)
{
  MQTTMessage msg = {topic, payload};
  xQueueSend (messageOutQueue, (void *) &msg, (TickType_t) 0);
}

void MQTT::sendDebug (String payload)
{
  if(DEBUG_ENABLED)
  { 
    MQTTMessage msg = {MQTT_PUBLISH_TOPIC_DEBUG, payload};
    xQueueSend (messageOutQueue, (void *) &msg, (TickType_t) 0);
  }
}

void MQTT::MQTTtask ()
{
  MQTTMessage msg = {"", ""};
  while (true)
  {
    
    // called regularly to allow the client to process incoming messages and maintain its connection to the server
    mqtt_client.loop();
    
    if (!mqtt_client.connected()) 
    {
      reconnect();
    }
    
    //MQTTMessage msg = {MQTT_PUBLISH_TOPIC_STATECHANGE, "LOCKED"};
    if (xQueueReceive (messageOutQueue, &msg, 0) == pdTRUE)
    {
      int topic_len = msg.topic.length() + 1; 
      char topic_char[topic_len];
      msg.topic.toCharArray(topic_char, topic_len);
      
      int payload_len = msg.payload.length() + 1; 
      char payload_char[payload_len];
      msg.payload.toCharArray(payload_char, payload_len);
      
      bool test = mqtt_client.publish(topic_char, payload_char);
    }

    //this delay is mandatory as the watchdog requires the core to be IDLE sometimes
    vTaskDelay (5 / portTICK_PERIOD_MS);
  }
}

void MQTT::setMQTTCallback (std::function<void(char*, uint8_t*, unsigned int)> cb)
{
  mqtt_client.setCallback (cb);
}
