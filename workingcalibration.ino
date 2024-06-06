#include "HX711.h"

HX711 scale;

const int LOADCELL_DOUT_PIN = D6;
const int LOADCELL_SCK_PIN = D7;

float calibration_factor = -109000; // Adjust this value as needed
float weight;
const int num_samples = 2; // Number of samples for averaging
float readings[num_samples]; // Array to store the samples
int readIndex = 0; // Current index in the array
float total = 0; // Sum of the samples
float average = 0; // Average of the samples
unsigned long lastTareTime = 0; // Last time the scale was tared
const unsigned long tareInterval = 60000; // Interval to re-tare the scale (e.g., 60 seconds)
bool measureWeight = false;

void setup() {
  Serial.begin(115200); // Starting serial connection
  Serial.println("HX711 Calibration");
  Serial.println("First Remove all the weight");
  Serial.println("Place your weight after the readings start");
  Serial.println("Use 'w' to increase and 's' to decrease calibration factor");
  Serial.println("Press 't' for reset");
  Serial.println("Press 'm' to measure weight");

  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN); // Starting connection of HX711
  scale.set_scale();
  scale.tare(); // Reset the scale to 0

  long zero_factor = scale.read_average(); // Get a baseline reading
  Serial.print("Zero factor: "); // This can be used to remove the need to tare the scale. Useful in permanent scale projects.
  Serial.println(zero_factor);

  // Initialize the readings array
  for (int i = 0; i < num_samples; i++) {
    readings[i] = 0;
  }
}

void loop() {
  scale.set_scale(calibration_factor); // Adjust to this calibration factor

  // Check for serial input
  while (Serial.available() > 0) {
    char receivedChar = Serial.read();
    switch (receivedChar) {
      case 't': // Tare
        scale.tare();
        Serial.println("Scale tared");
        break;
      case 'm': // Measure weight
        measureWeight = true;
        break;
      case 'w': // Increase calibration factor
        calibration_factor += 100;
        break;
      case 's': // Decrease calibration factor
        calibration_factor -= 100;
        break;
    }
  }

  // Measure weight if the flag is set
  if (measureWeight) {
    // Reset total
    total = 0;
    
    // Take multiple readings and calculate the total
    for (int i = 0; i < num_samples; i++) {
      readings[i] = scale.get_units();
      total += readings[i];
    }
    
    // Calculate the average
    average = total / num_samples;
    average = average * 1000; // Convert from kg to g

    Serial.print("Weight: ");
    Serial.print(average, 1); // Printing the weight value with 0.1g resolution
    Serial.print(" g");
    Serial.print(" calibration_factor: ");
    Serial.print(calibration_factor);
    Serial.println();

    measureWeight = false; // Reset the flag after measurement
  }

  delay(500); // Add a delay to allow the scale to stabilize
}
