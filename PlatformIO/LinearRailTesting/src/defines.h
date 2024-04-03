#pragma once
#include <functional>
#include <Arduino.h>
#include <AccelStepper.h>
#include <PubSubClient.h>
#include <ETH.h>
#include <esp_netif.h>
#include <esp_netif_types.h>


#define DEBUG_ENABLED true ///< Define the MQTT debug output state

//MQTT DEFINES
#define MQTT_BROKER_IP "192.168.6.61"
const int MQTT_BROKER_PORT = 1883;

#define MQTT_CLIENT_ID "LinearRailControl"
#define MQTT_USER "zigbee"
#define MQTT_PASSWORD "zigbeemqtt"


#define MQTT_PUBLISH_TOPIC_REQUEST "linearRailControl/request"
#define MQTT_PUBLISH_TOPIC_REPORT "linearRailControl/report"
#define MQTT_PUBLISH_TOPIC_DEBUG "linearRailControl/debug"




// Declare global variables
esp_eth_mac_t *mac;
esp_eth_phy_t *phy;
esp_netif_t *global_netif;