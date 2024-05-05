<script lang="ts">
import { defineComponent, ref } from 'vue';
import {$mqtt} from "vue-paho-mqtt";


export default defineComponent({
  name: 'LogsPage',
  setup() {
    const messageToSend = ref('');
    const receivedDebug = ref<string[]>([]);
    const receivedMeasurements = ref<string[]>([]);
    const DebugTopic = ref('linearRailControl/debug');
    const MeasurementsTopic = ref('linearRailControl/measurements');

    $mqtt.subscribe(DebugTopic.value, (data: string) => {
      receivedDebug.value.push(data);
      console.log(data)
    });
    $mqtt.subscribe(MeasurementsTopic.value, (data: string) => {
      receivedMeasurements.value.push(data);
      console.log(data)
    });

    const sendMessage = () => {
      if (messageToSend.value.trim() !== '') {
        $mqtt.publish(DebugTopic.value, messageToSend.value, 'Qr');
        console.log(messageToSend.value);
        messageToSend.value = '';
      }
    };

    return { messageToSend, receivedDebug, receivedMeasurements, sendMessage };
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
