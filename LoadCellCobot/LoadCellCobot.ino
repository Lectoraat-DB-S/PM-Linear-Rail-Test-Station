#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <HX711.h>

HX711 scale;

const char* ssid = "AWL";
const char* password = "4wLPR3shared!@-";
const char* mqtt_server = "10.38.4.165";
const char* mqtt_username = "zigbee";
const char* mqtt_password = "zigbeemqtt";
const char* mqtt_topic_calibration_command = "RTS/loadcell/calibration";
const char* mqtt_topic_calibration_factor = "RTS/loadcell/calibration/factor";
const char* mqtt_topic_measurement = "RTS/loadcell/measurement";
const char* mqtt_topic_result = "RTS/loadcell/result";

// New MQTT topics for each relay and optocoupler
const char* mqtt_topic_relay1 = "RTS/cobot/enabled";
const char* mqtt_topic_relay2 = "RTS/cobot/move";
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
int calibrationStage = 0;

// Store the previous state of the optocoupler pins
bool prevStateOptocoupler1 = LOW;
bool prevStateOptocoupler2 = LOW;
bool prevStateOptocoupler3 = LOW;

float calibration_factor = -457500.00; // Initial calibration factor

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

void startCalibration() {
  if (calibrationStage == 0) {
    Serial.println("Calibration: Remove all weights from the scale.");
    client.publish(mqtt_topic_calibration_command, "Stage 1: Remove all weights from the scale. Press the button again to continue.");
    calibrationStage++;
  } else if (calibrationStage == 1) {
    Serial.println("Calibration: Taring the scale.");
    scale.set_scale();
    scale.tare(); // Reset the scale to 0
    client.publish(mqtt_topic_calibration_command, "Stage 2: Scale tared. Place a known weight on the scale. Press the button again to continue.");
    calibrationStage++;
  } else if (calibrationStage == 2) {
    Serial.println("Calibration: Place a known weight on the scale.");
    client.publish(mqtt_topic_calibration_command, "Stage 3: Place a known weight on the scale. Enter the calibration factor in the designated topic.");
    calibrationStage++;
  } else if (calibrationStage == 3) {
    Serial.println("Calibration: Waiting for calibration factor.");
    client.publish(mqtt_topic_calibration_command, "Stage 4: Enter the calibration factor in the designated topic.");
  } else if (calibrationStage == 4) {
    Serial.println("Calibration: Completed. Taking a measurement.");
    float weight = abs(scale.get_units(10)); // Take a measurement and make it positive
    String weightStr = String(weight, 2);
    client.publish(mqtt_topic_result, weightStr.c_str());
    String completionMessage = "Calibration completed. Weight measurement: " + weightStr;
    client.publish(mqtt_topic_calibration_command, completionMessage.c_str());
    calibrated = true; // Ensure calibrated is set to true here as well
    calibrationStage = 0; // Reset calibration stage
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
  payload[length] = '\0'; // Null-terminate the payload
  String message = String((char*)payload);
  
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  Serial.println(message);

  if (strcmp(topic, mqtt_topic_calibration_command) == 0) {
    if (message == "0") {
      startCalibration();
    }
  } else if (strcmp(topic, mqtt_topic_calibration_factor) == 0) {
    // Set calibration factor received from the topic
    calibration_factor = atof(message.c_str());
    Serial.print("Calibration factor set to: ");
    Serial.println(calibration_factor);
    scale.set_scale(calibration_factor); // Set the scale to the new calibration factor
    calibrated = true; // Set calibrated to true after receiving the calibration factor

    // Take a measurement after setting the calibration factor
    float weight = abs(scale.get_units(10)); // Take a measurement and make it positive
    String weightStr = String(weight, 2);
    client.publish(mqtt_topic_result, weightStr.c_str());
  } else if (strcmp(topic, mqtt_topic_measurement) == 0) {
    if (calibrated) {
      // Take 3 measurements and calculate the average
      float weight1 = abs(scale.get_units(10)); // Make it positive
      delay(100); // Short delay between measurements
      float weight2 = abs(scale.get_units(10)); // Make it positive
      delay(100);
      float weight3 = abs(scale.get_units(10)); // Make it positive
      float averageWeight = (weight1 + weight2 + weight3) / 3.0;
      
      String weightStr = String(averageWeight, 2);
      client.publish(mqtt_topic_result, weightStr.c_str());
    } else {
      client.publish(mqtt_topic_calibration_command, "Error: Scale not calibrated.");
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

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect("ESP8266Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      client.subscribe(mqtt_topic_calibration_command);
      client.subscribe(mqtt_topic_calibration_factor);
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

  delay(50); // Wait 1 second before reading again
}
