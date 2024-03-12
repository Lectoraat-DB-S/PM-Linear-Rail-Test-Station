#include <AccelStepper.h>
#include <Arduino_FreeRTOS.h>

AccelStepper stepper(1, 8, 9);
bool endstop;
long position = 0; // Variable to store current stepper position

// Task handles
TaskHandle_t stepperTaskHandle;
// TaskHandle_t sensorTaskHandle;

void setup()
{
  Serial.begin(9600);
  Serial.println("Testing Accelstepper");
  stepper.setMaxSpeed(10000);
  stepper.setAcceleration(10000);
  
  // Initialize stepper position
  position = 8000;
  stepper.setCurrentPosition(position);
  
  // Create tasks
  xTaskCreate(
    stepperTask,             // Function to implement the task
    "StepperTask",           // Name of the task
    128,                   // Stack size in words
    NULL,                    // Task input parameter
    1,                       // Priority of the task
    &stepperTaskHandle       // Task handle
  );

  // xTaskCreate(
  //   readSensorTask,          // Function to implement the task
  //   "ReadSensorTask",        // Name of the task
  //   128,                   // Stack size in words
  //   NULL,                    // Task input parameter
  //   1,                       // Priority of the task
  //   &sensorTaskHandle        // Task handle
  // );
}

void loop()
{
  // Empty. Things are done in Tasks.
}

/*--------------------------------------------------*/
/*---------------------- Tasks ---------------------*/
/*--------------------------------------------------*/

void stepperTask(void *pvParameters)
{
  // Move stepper until endstop is triggered
  Serial.println("Homing sequence started...");

  long startPos = stepper.currentPosition() - 4000;
  bool atStartPos = false;

  // Move to the starting position
  while (!atStartPos)
  {
    stepper.moveTo(startPos);
    stepper.run();
    if (stepper.distanceToGo() == 0)
      atStartPos = true;
    vTaskDelay(pdMS_TO_TICKS(10)); // Delay for 10 milliseconds
  }

  Serial.print("Sensor: ");
  Serial.println(analogRead(A0));

  // Move until sensor value is above 950
  while (analogRead(A0) > 1000)
  {
    stepper.setSpeed(1000); // Set a moderate speed
    stepper.runSpeed();     // Move at the set speed
    vTaskDelay(pdMS_TO_TICKS(10)); // Delay for 10 milliseconds
  }

  // Stop the stepper motor
  stepper.stop();

  // Set current position to 0
  stepper.setCurrentPosition(0);

  Serial.print("Currentpos: ");
  Serial.println(stepper.currentPosition());

  Serial.println("Homing completed!");

  // Resume normal operation
  while (1)
  {
    if (stepper.distanceToGo() == 0)
      stepper.moveTo(-stepper.currentPosition());

    stepper.run();
    vTaskDelay(pdMS_TO_TICKS(10)); // Delay for 10 milliseconds
  }
}


// void readSensorTask(void *pvParameters)
// {
//   while (1)
//   {
//     bool currentVal = endstop;
//     if (analogRead(A0) < 900)
//       endstop = false;
//     else
//       endstop = true;

//     if (currentVal != endstop)
//     {
//       Serial.print("Sensor value:");
//       Serial.println(endstop);
//     }

//     vTaskDelay(pdMS_TO_TICKS(100)); // Delay for 100 milliseconds
//   }
// }