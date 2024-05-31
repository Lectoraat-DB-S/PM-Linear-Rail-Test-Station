<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { $mqtt } from 'vue-paho-mqtt';
import MeasurementBoxplot from 'components/charts/MeasurementBoxplot.vue';
import MeasurementTable from 'components/tables/MeasurementTable.vue';

interface Measurement {
  [key: string]: string;
}

export default defineComponent({
  name: 'DashboardPage',
  components: {
    MeasurementBoxplot,
    MeasurementTable,
  },
  setup() {
    const receivedMeasurements = ref<Measurement[]>([]);
    const receivedImage = ref<string | null>(null);

    const MeasurementsTopic = 'vision/measurements';
    const TakePictureTopic = 'vision/picture';
    const ImageTopic = 'vision/image';

    onMounted(() => {
      $mqtt.subscribe(MeasurementsTopic, (data: string) => {
        try {
          const measurement: Measurement = JSON.parse(data);
          receivedMeasurements.value.push(measurement);
          console.log('Measurement received', measurement);
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

    return {
      receivedMeasurements,
      receivedImage,
      sendTakePicture,
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
            <MeasurementBoxplot />
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
</style>
