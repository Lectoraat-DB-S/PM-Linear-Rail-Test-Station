#pragma once
#include "defines.h"
#include <SPI.h>
#include <ETH.h>
#include <PubSubClient.h>

typedef struct
{
  String topic;
  String payload;
} MQTTMessage;

class MQTT
{ 
  // EthernetClient client; 
  PubSubClient mqtt_client;

  QueueHandle_t messageOutQueue = NULL;

  //function to (re)connect to the MQTT broker and subscribe to all necessary topics
  void reconnect ();
  //void sendMessage (const char message[]);

public:

  MQTT ();

  void init();
  
  void inputIsHoog (int InputID);

  void inputIsLaag (int InputID);

  void noodSignaalHoog ();

  void noodSignaalLaag ();

  void MQTTtask ();

  void setMQTTCallback (std::function<void(char*, uint8_t*, unsigned int)> cb);
  
  void sendMessage (String topic, String payload);

  void sendDebug (String payload);
};
