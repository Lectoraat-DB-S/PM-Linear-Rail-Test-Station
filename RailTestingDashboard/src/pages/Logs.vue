<script lang="ts">
import { defineComponent, ref } from 'vue';
import {$mqtt} from "vue-paho-mqtt";


export default defineComponent({
  name: 'LogsPage',
  setup() {
    const messageToSend = ref('');
    const receivedMessages = ref<string[]>([]);
    const DebugTopic = ref('linearRailControl/debug');

    $mqtt.subscribe(DebugTopic.value, (data: string) => {
      receivedMessages.value.push(data);
      console.log(data)
    });

    const sendMessage = () => {
      if (messageToSend.value.trim() !== '') {
        $mqtt.publish(DebugTopic.value, messageToSend.value, 'Qr');
        console.log(messageToSend.value);
        messageToSend.value = '';
      }
    };

    return { messageToSend, receivedMessages, sendMessage };
  }
});
</script>

<template>
  <q-page padding>
    <div>
      <q-input v-model="messageToSend" label="Message to send" />
      <q-btn @click="sendMessage" label="Send Message" />
    </div>
    <div>
      <h2>Received Messages:</h2>
      <ul>
        <li v-for="(message, index) in receivedMessages" :key="index">{{ message }}</li>
      </ul>
    </div>
  </q-page>
</template>
