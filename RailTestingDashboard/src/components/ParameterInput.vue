﻿<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    return {
      AVal: ref(300),
      FVal: ref(25),
      GVal: ref(25),
      Gaten: ref(8),
      Gewicht: ref(200)
    }
  }
}
</script>

<template>
  <div class="q-pa-md example-row-equal-width" style="padding: 0; max-width: 600px">
    <div class="row">
      <div class="col">
        <div class="q-pa-md">
          <q-input
            v-model.number="AVal"
            label="A"
            placeholder="12.5"
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
            placeholder="12.5"
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
            placeholder="12.5"
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
            placeholder="220.25"
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
