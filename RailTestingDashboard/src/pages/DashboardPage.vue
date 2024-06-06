<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { $mqtt } from 'vue-paho-mqtt';
import { useMeasurementStore } from 'stores/measurements';
import MeasurementBoxplot from 'components/charts/MeasurementBoxplot.vue';
import MeasurementTable from 'components/tables/MeasurementTable.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    MeasurementBoxplot,
    MeasurementTable,
  },
  setup() {
    const measurementStore = useMeasurementStore();
    const receivedImage = ref<string | null>(null);

    const MeasurementsTopic = 'vision/measurements';
    const TakePictureTopic = 'vision/picture';
    const CobotEnableTopic = 'cobot/enabled';
    const ImageTopic = 'vision/image';

    onMounted(() => {
      $mqtt.subscribe(MeasurementsTopic, (data: string) => {
        try {
          const measurement = JSON.parse(data);
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const timestamp = `${hours}:${minutes}`; // Get current time in HH:MM format
          const measurementWithTimestamp = { ...measurement, timestamp };
          measurementStore.addMeasurements([measurementWithTimestamp]);
        } catch (error) {
          console.error('Failed to parse measurement data:', error);
        }
      });

      $mqtt.subscribe(ImageTopic, (data: string) => {
        receivedImage.value = `data:image/jpeg;base64,${data}`;
        console.log('Image received');
      });
    });

    const sendTakePicture = () => {
      $mqtt.publish(TakePictureTopic, 'Take a picture!', 'Qr');
      console.log('Take Picture command sent');
    };
    const sendEnableCobot = () => {
      $mqtt.publish(CobotEnableTopic, 'true', 'Qr');
      console.log('Enable Cobot command sent');
    };
    const sendDisableCobot = () => {
      $mqtt.publish(CobotEnableTopic, 'false', 'Qr');
      console.log('Disable Cobot command sent');
    };

    return {
      receivedMeasurements: measurementStore.measurements,
      receivedImage,
      sendTakePicture,
      sendEnableCobot,
      sendDisableCobot,
    };
  },
});
</script>

<template>
  <div class="row bg-blue-grey-2">
    <div id="parent" class="fit row wrap items-stretch content-start">
      <div class="col-12 child-container">
        <q-card class="no-border-radius">
          <q-card-section>
            <div class="row q-gutter-sm">
              <div class="col-auto">
                <div class="column q-gutter-sm">
                  <q-btn color="primary" text-color="black" label="Enable" @click="sendEnableCobot" />
                  <q-btn color="primary" text-color="black" label="Disable" @click="sendDisableCobot" />
                </div>
              </div>
              <div class="col">
                <MeasurementBoxplot />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 child-container">
        <q-card class="no-border-radius">
          <q-card-section>
            <MeasurementTable :measurements="receivedMeasurements" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 child-container">
        <q-card class="no-border-radius">
          <q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-btn color="primary" text-color="black" @click="sendTakePicture" label="Take Picture" />
            </div>
            <div class="text-h6">Received Image:</div>
            <div v-if="receivedImage" class="q-mt-md">
              <img :src="receivedImage" alt="Received Image" style="max-width: 100%; max-height: 400px;" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
#parent
  overflow: auto

.child-container
  overflow: auto

.column
  display: flex
  flex-direction: column
</style>
