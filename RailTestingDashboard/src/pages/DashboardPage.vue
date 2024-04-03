<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';



const MeasurementDeviation = defineAsyncComponent(() =>
  import('components/charts/MeasurementDeviation.vue')
)
const MeasurementTable = defineAsyncComponent(() =>
  import('components/tables/MeasurementTable.vue')
)
const ParameterInput = defineAsyncComponent(() =>
  import('components/ParameterInput.vue')
)

export default defineComponent({
  name: 'DashboardPage',
  components:{
    MeasurementDeviation,
    MeasurementTable,
    ParameterInput,
  },
  data() {
    return {

    };
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
          <ParameterInput />
        </q-card-section>
      </q-card>
    </div>
      <div class="col-12 child-container">
      <q-card class="no-border-radius">
        <q-card-section>
          <MeasurementTable />
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
