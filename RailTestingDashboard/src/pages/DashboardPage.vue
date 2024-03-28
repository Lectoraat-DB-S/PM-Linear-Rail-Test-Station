<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';

const MeasurementDeviation = defineAsyncComponent(() =>
  import('components/charts/MeasurementDeviation.vue')
)

export default defineComponent({
  name: 'DashboardPage',
  components:{
    MeasurementDeviation,
  }

});


</script>

<template>
  <div class="row bg-blue-grey-2">
    <div id="parent" class="fit row wrap  items-stretch content-start">
      <div class="col-8 child-container">
        <q-card class="no-border-radius">
          <q-card-section>
            <MeasurementDeviation />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 child-container">
      <q-card class="no-border-radius">
        <q-card-section>
          Child #2
        </q-card-section>
      </q-card>
    </div>
      <div class="col-12 child-container">
      <q-card class="no-border-radius">
        <q-card-section>
          Child #3
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
