#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <HX711.h>

HX711 scale;

const char* ssid = "AWL";
const char* password = "4wLPR3shared!@-";
const char* mqtt_server = "10.38.4.165";
const char* mqtt_username = "zigbee";
const char* mqtt_password = "zigbeemqtt";
const char* mqtt_topic_loadcell = "loadcell";
const char* mqtt_topic_calibrate_start = "loadcell/calibrate/start";
const char* mqtt_topic_calibrate_removed = "loadcell/calibrate/removed";
const char* mqtt_topic_calibrate_placed = "loadcell/calibrate/placed";
const char* mqtt_topic_calibrate_done = "loadcell/calibrate/done";
const char* mqtt_topic_measure = "loadcell/measure"; // Declare mqtt_topic_measure
const char* mqtt_response_topic = "loadcell/response";

WiFiClient espClient;
PubSubClient client(espClient);

uint8_t dataPin = D5; // DOUT pin
uint8_t clockPin = D6; // SCK pin
bool calibrated = false;
bool calibrationInProgress = false;

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
  if (strcmp(topic, mqtt_topic_calibrate_start) == 0) {
    if (!calibrationInProgress) {
      startCalibration();
    }
  } else if (strcmp(topic, mqtt_topic_calibrate_removed) == 0) {
    if (calibrationInProgress) {
      weightRemoved();
    }
  } else if (strcmp(topic, mqtt_topic_calibrate_placed) == 0) {
    if (calibrationInProgress) {
      weightPlaced();
    }
  } else if (strcmp(topic, mqtt_topic_measure) == 0) {
    if (calibrated) {
      float weight = scale.get_units(10);
      String weightStr = String(weight, 2);
      client.publish(mqtt_topic_loadcell, weightStr.c_str());
    } else {
      client.publish(mqtt_response_topic, "Error: Scale not calibrated.");
    }
  }
}

void startCalibration() {
  calibrationInProgress = true;
  client.publish(mqtt_response_topic, "Remove weight from scale and publish 0 on loadcell/calibrate/removed topic");
}

void weightRemoved() {
  scale.tare();
  client.publish(mqtt_response_topic, "Place weight on the scale and publish 0 on loadcell/calibrate/placed topic");
}

void weightPlaced() {
  scale.set_scale(1005); // Set calibration weight to 1 gram
  calibrationInProgress = false;
  calibrated = true;
  client.publish(mqtt_response_topic, "Tare scale and calibration completed");
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP8266Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      client.subscribe(mqtt_topic_calibrate_start);
      client.subscribe(mqtt_topic_calibrate_removed);
      client.subscribe(mqtt_topic_calibrate_placed);
      client.subscribe(mqtt_topic_measure);
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
