<script lang="ts">
import { defineComponent, ref } from 'vue';
import {$mqtt} from "vue-paho-mqtt";


export default defineComponent({
  name: 'LogsPage',
  setup() {
    const messageToSend = ref('');
    const receivedDebug = ref<string[]>([]);
    const receivedMeasurements = ref<string[]>([]);
    const receivedLoadcellResult = ref<string[]>([]);
    const receivedLoadcellCalib = ref<string[]>([]);

    const DebugTopic = ref('dashboard/debug');
    const MeasurementsTopic = ref('vision/measurements');
    const LoacellMeasurementsTopic = ref('loadcell/measurement');
    const LoacellResultTopic = ref('loadcell/result');
    const LoadcellCalibTopic = ref('loadcell/calibration')

    $mqtt.subscribe(DebugTopic.value, (data: string) => {
      receivedDebug.value.push(data);
      console.log(data)
    });
    $mqtt.subscribe(MeasurementsTopic.value, (data: string) => {
      receivedMeasurements.value.push(data);
      console.log(data)
    });
    $mqtt.subscribe(LoacellResultTopic.value, (data: string) => {
      if (data != "measure") {
        receivedLoadcellResult.value.push(data);
        console.log(data)
      }
    });
    $mqtt.subscribe(LoadcellCalibTopic.value, (data: string) => {
      if (data != "0")
      {
        receivedLoadcellCalib.value.push(data);
        console.log(data)
      }
    });

    const sendMessage = () => {
      if (messageToSend.value.trim() !== '') {
        $mqtt.publish(DebugTopic.value, messageToSend.value, 'Qr');
        console.log(messageToSend.value);
        messageToSend.value = '';
      }
    };

    const sendLoadcellCalib = () => {
      $mqtt.publish(LoadcellCalibTopic.value, "0", 'Qr');
      console.log(messageToSend.value);
    };

    const sendLoadcellMeasurement = () => {
      $mqtt.publish(LoacellMeasurementsTopic.value, "measure", 'Qr');
      console.log(messageToSend.value);
    };

    const clearLoadcell = () => {
      receivedLoadcellResult.value  = [];
      receivedLoadcellCalib.value  = [];
    };

    return { messageToSend, receivedDebug, receivedMeasurements, receivedLoadcellResult, receivedLoadcellCalib, sendMessage , sendLoadcellCalib, sendLoadcellMeasurement, clearLoadcell };
  }
});
</script>

<template>
  <q-page padding>
    <div class="q-gutter-y-md column">
      <q-input v-model="messageToSend" label="Message to send" />
      <q-btn color="primary" text-color="black" @click="sendMessage" label="Send Message" />
      <div id="parent" class="fit row wrap justify-around content-start" style="overflow: hidden;">
        <div class="col-grow child-container">
          <q-card bordered style="margin: 5px">
            <q-card-section>
              <div class="text-h6">Received Debug:</div>
              <ul>
                <li v-for="(message, index) in receivedDebug" :key="index">{{ message }}</li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-grow child-container">
          <q-card bordered style="margin: 5px">
            <q-card-section>
              <div class="text-h6">Received Measurements:</div>
              <ul>
                <li v-for="(message, index) in receivedMeasurements" :key="index">{{ message }}</li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-grow child-container">

          <q-card bordered style="margin: 5px">
            <q-card-section>
              <div class="text-h6">Loadcell</div>
              <div class="q-pa-md q-gutter-sm">
                <q-btn color="primary" text-color="black" @click="sendLoadcellCalib" label="Calibration" />
                <q-btn color="primary" text-color="black" @click="sendLoadcellMeasurement" label="Measure" />
                <q-btn color="red" text-color="black" @click="clearLoadcell" label="Clear" />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text">Loadcell calib:</div>
              <ul>
                <li v-for="(message, index) in receivedLoadcellCalib" :key="index">{{ message }}</li>
              </ul>
              <div class="text">Loadcell measurements:</div>
              <ul>
                <li v-for="(message, index) in receivedLoadcellResult" :key="index">{{ message }}</li>
              </ul>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="sass">
#parent
  overflow: auto

.child-container
  overflow: auto

</style>
