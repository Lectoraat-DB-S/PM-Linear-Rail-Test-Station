#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <HX711.h>

HX711 scale;

const char* ssid = "AWL";
const char* password = "4wLPR3shared!@-";
const char* mqtt_server = "10.38.4.165";
const char* mqtt_username = "zigbee";
const char* mqtt_password = "zigbeemqtt";
const char* mqtt_topic_calibration = "RTS/loadcell/calibration";
const char* mqtt_topic_measurement = "RTS/loadcell/measurement"; // Declare mqtt_topic_measure
const char* mqtt_topic_result = "RTS/loadcell/result";

WiFiClient espClient;
PubSubClient client(espClient);

uint8_t dataPin = D5; // DOUT pin
uint8_t clockPin = D6; // SCK pin
bool calibrated = false;
bool calibrationInProgress = false;
int stage = 0;

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  payload[length] = '\0'; // Null-terminate the payload
  String message = String((char*)payload);
  if (strcmp(topic, mqtt_topic_calibration) == 0) {
    if (message == "0") {
      startCalibration();
    }
  } else if (strcmp(topic, mqtt_topic_measurement) == 0) {
    if (message == "measure") {
      if (calibrated) {
        float weight = scale.get_units(10);
        String weightStr = String(weight, 2);
        client.publish(mqtt_topic_result, weightStr.c_str());
      } else {
        client.publish(mqtt_topic_calibration, "Error: Scale not calibrated.");
      }
    }
  }
}

void startCalibration() {
  switch (stage) {
    case 0:
      calibrationInProgress = true;
      client.publish(mqtt_topic_calibration, "Make sure no weight is attached to the gripper");
      stage++;
      break;
    case 1:
      scale.tare();
      client.publish(mqtt_topic_calibration, "Place weight on the scale");
      stage++;
      break;
    case 2:
      scale.set_scale(1005); // Set calibration weight to 1 gram
      calibrationInProgress = false;
      calibrated = true;
      client.publish(mqtt_topic_calibration, "Tare scale and calibration completed");
      stage = 0;
      break;
  }
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP8266Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      client.subscribe(mqtt_topic_calibration);
      client.subscribe(mqtt_topic_measurement);
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883);
  client.setCallback(callback);
  scale.begin(dataPin, clockPin);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
  
  delay(1000); // Wait 1 second before reading again
}
