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
const char* mqtt_topic_measurement = "RTS/loadcell/measurement";
const char* mqtt_topic_result = "RTS/loadcell/result";

// New MQTT topics for each relay and optocoupler
const char* mqtt_topic_relay1 = "RTS/cobot/enabled";
const char* mqtt_topic_relay2 = "RTS/relay/input2";
const char* mqtt_topic_relay3 = "RTS/relay/input3";
const char* mqtt_topic_relay4 = "RTS/relay/input4";
const char* mqtt_topic_optocoupler2 = "RTS/vision/picture";
const char* mqtt_topic_optocoupler3 = "RTS/optocoupler/input3";

WiFiClient espClient;
PubSubClient client(espClient);

uint8_t dataPin = D1; // DOUT pin
uint8_t clockPin = D0; // SCK pin

// Define relay and optocoupler pins
uint8_t relayPin1 = D2;
uint8_t relayPin2 = D3;
uint8_t relayPin3 = D4;
uint8_t relayPin4 = D5;
uint8_t optocouplerPin1 = D6;
uint8_t optocouplerPin2 = D7;
uint8_t optocouplerPin3 = D8;

bool calibrated = false;
bool calibrationInProgress = false;
int stage = 0;

// Store the previous state of the optocoupler pins
bool prevStateOptocoupler1 = LOW;
bool prevStateOptocoupler2 = LOW;
bool prevStateOptocoupler3 = LOW;

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
  } else if (strcmp(topic, mqtt_topic_relay1) == 0) {
    if (message == "true") {
      digitalWrite(relayPin1, HIGH);
    } else if (message == "false") {
      digitalWrite(relayPin1, LOW);
    }
  } else if (strcmp(topic, mqtt_topic_relay2) == 0) {
    if (message == "true") {
      digitalWrite(relayPin2, HIGH);
    } else if (message == "false") {
      digitalWrite(relayPin2, LOW);
    }
  } else if (strcmp(topic, mqtt_topic_relay3) == 0) {
    if (message == "true") {
      digitalWrite(relayPin3, HIGH);
    } else if (message == "false") {
      digitalWrite(relayPin3, LOW);
    }
  } else if (strcmp(topic, mqtt_topic_relay4) == 0) {
    if (message == "true") {
      digitalWrite(relayPin4, HIGH);
    } else if (message == "false") {
      digitalWrite(relayPin4, LOW);
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
      client.subscribe(mqtt_topic_relay1); // Subscribe to the relay topics
      client.subscribe(mqtt_topic_relay2);
      client.subscribe(mqtt_topic_relay3);
      client.subscribe(mqtt_topic_relay4);
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
  
  // Initialize the relay and optocoupler pins
  pinMode(relayPin1, OUTPUT);
  pinMode(relayPin2, OUTPUT);
  pinMode(relayPin3, OUTPUT);
  pinMode(relayPin4, OUTPUT);
  pinMode(optocouplerPin1, INPUT); // Initialize optocoupler pins as input
  pinMode(optocouplerPin2, INPUT);
  pinMode(optocouplerPin3, INPUT);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Check the state of the optocoupler pins and publish a message if they change
  bool currentStateOptocoupler1 = !digitalRead(optocouplerPin1); // Inverted logic
  bool currentStateOptocoupler2 = !digitalRead(optocouplerPin2); // Inverted logic
  bool currentStateOptocoupler3 = digitalRead(optocouplerPin3);

  Serial.print("Optocoupler 1: ");
  Serial.println(currentStateOptocoupler1);
  Serial.print("Optocoupler 2: ");
  Serial.println(currentStateOptocoupler2);
  Serial.print("Optocoupler 3: ");
  Serial.println(currentStateOptocoupler3);

  if (currentStateOptocoupler1 != prevStateOptocoupler1) {
    prevStateOptocoupler1 = currentStateOptocoupler1;
    if (currentStateOptocoupler1 == HIGH) {
      client.publish(mqtt_topic_measurement, "measure");
    }
  }
  
  if (currentStateOptocoupler2 != prevStateOptocoupler2) {
    prevStateOptocoupler2 = currentStateOptocoupler2;
    if (currentStateOptocoupler2 == HIGH) {
      client.publish(mqtt_topic_optocoupler2, "Take a picture!");
    } 
  }

  if (currentStateOptocoupler3 != prevStateOptocoupler3) {
    prevStateOptocoupler3 = currentStateOptocoupler3;
    if (currentStateOptocoupler3 == HIGH) {
      client.publish(mqtt_topic_optocoupler3, "Optocoupler 3 is HIGH");
    } else {
      client.publish(mqtt_topic_optocoupler3, "Optocoupler 3 is LOW");
    }
  }

  delay(1000); // Wait 1 second before reading again
}
