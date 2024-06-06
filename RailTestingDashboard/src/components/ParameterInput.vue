<script lang="ts">
import { computed } from 'vue';
import { useMeasurementStore } from 'src/stores/measurements';

export default {
  name: 'ParameterInput',
  setup() {
    const measurementStore = useMeasurementStore();

    // Computed properties to bind store values to input fields
    const AVal = computed({
      get: () => measurementStore.railLength,
      set: (value) => measurementStore.setRailLength(value)
    });
    const FVal = computed({
      get: () => measurementStore.endPitch,
      set: (value) => measurementStore.setEndPitch(value)
    });
    const GVal = computed({
      get: () => measurementStore.holePitch,
      set: (value) => measurementStore.setHolePitch(value)
    });
    const Gaten = computed({
      get: () => measurementStore.holeCount,
      set: (value) => measurementStore.setHoleCount(value)
    });
    const Gewicht = computed({
      get: () => measurementStore.railWeight,
      set: (value) => measurementStore.setRailWeight(value)
    });

    return {
      AVal,
      FVal,
      GVal,
      Gaten,
      Gewicht,
    };
  },
};
</script>

<template>
  <div class="q-pa-md example-row-equal-width" style="padding: 0; max-width: 600px">
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <q-input
            v-model.number="AVal"
            label="A"
            placeholder="300"
            type="number"
            filled
            style="max-width: 200px"
            dense
          />
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md">
          <q-input
            v-model.number="FVal"
            label="F"
            placeholder="25"
            type="number"
            filled
            style="max-width: 200px"
            dense
          />
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md">
          <q-input
            v-model.number="GVal"
            label="G"
            placeholder="25"
            type="number"
            filled
            style="max-width: 200px"
            dense
          />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <q-input
            v-model.number="Gaten"
            label="Gaten"
            placeholder="8"
            type="number"
            filled
            style="max-width: 200px"
            dense
          />
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md">
          <q-input
            v-model.number="Gewicht"
            label="Gewicht (g)"
            placeholder="200"
            type="number"
            filled
            style="max-width: 200px"
            dense
          />
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col">
        <div class="row items-center justify-center">
          <q-img
            src="https://i.imgur.com/JQhm23j.png"
            spinner-color="white"
            style="width: 100%; height: auto;"
            :fit="'contain'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>
