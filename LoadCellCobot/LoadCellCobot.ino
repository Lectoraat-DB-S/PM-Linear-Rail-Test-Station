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
const char* mqtt_topic_calibrate = "loadcell/calibrate";
const char* mqtt_topic_measure = "loadcell/measure";

WiFiClient espClient;
PubSubClient client(espClient);

uint8_t dataPin = D5; // DOUT pin
uint8_t clockPin = D6; // SCK pin
bool calibrated = false;

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
  if (strcmp(topic, mqtt_topic_calibrate) == 0) {
    calibrateLoadCell();
  } else if (strcmp(topic, mqtt_topic_measure) == 0) {
    if (!calibrated) {
      Serial.println("Error: Scale not calibrated.");
      return;
    }
    float weight = scale.get_units(10);
    Serial.print("Weight: ");
    Serial.print(weight);
    Serial.println(" grams");
    if (client.connected()) {
      String weightStr = String(weight, 2);
      client.publish(mqtt_topic_loadcell, weightStr.c_str());
    }
  }
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP8266Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      client.subscribe(mqtt_topic_calibrate);
      client.subscribe(mqtt_topic_measure);
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void calibrateLoadCell() {
  Serial.println("\nEmpty the scale, press a key to continue");
  while (!Serial.available()) {
    delay(100);
  }
  while (Serial.available()) {
    Serial.read();
  }
  scale.tare();
  Serial.println("Scale emptied and tared.");

  Serial.println("\nPut 63 grams on the scale, press a key to continue");
  while (!Serial.available()) {
    delay(100);
  }
  while (Serial.available()) {
    Serial.read();
  }
  scale.set_scale(1005); // Set calibration weight to 63 grams

  Serial.println("\nTare scale, press a key to continue");
  while (!Serial.available()) {
    delay(100);
  }
  while (Serial.available()) {
    Serial.read();
  }
  scale.tare();
  Serial.println("Scale calibrated with 63 grams.");
  calibrated = true;
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
