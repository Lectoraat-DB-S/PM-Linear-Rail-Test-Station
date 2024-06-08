<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useMeasurementStore } from 'stores/measurements';

interface Measurement {
  [key: string]: string | number;
  timestamp: string ;
}

export default defineComponent({
  name: 'MeasurementTable',
  props: {
    measurements: {
      type: Array as PropType<Measurement[]>,
      required: true,
    },
  },
  setup() {
    const measurementStore = useMeasurementStore();

    const removeMeasurement = (index: number) => {
      measurementStore.removeMeasurement(index);
    };

    const formatValue = (value: string | number | undefined): string => {
      if (value === undefined || value === null) return '-';
      const num = parseFloat(value as string);
      if (isNaN(num)) return value.toString();
      return num.toFixed(2);
    };

    const getBadgeColor = (value: number) => {
      return Math.abs(value - measurementStore.holePitch) <= measurementStore.tolerance ? 'green' : 'red';
    };

    return {
      formatValue,
      removeMeasurement,
      getBadgeColor,
    };
  },
});
</script>

<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-column-table"
      flat
      bordered
      title="Meetgegevens"
      :rows="measurements"
      :columns="[
        { name: 'timestamp', align: 'left', label: 'Time', field: 'timestamp', sortable: true },
        { name: 'Steek_1', align: 'left', label: 'Steek 1', field: 'Steek_1', sortable: true },
        { name: 'Steek_2', align: 'left', label: 'Steek 2', field: 'Steek_2', sortable: true },
        { name: 'Steek_3', align: 'left', label: 'Steek 3', field: 'Steek_3', sortable: true },
        { name: 'Steek_4', align: 'left', label: 'Steek 4', field: 'Steek_4', sortable: true },
        { name: 'Steek_5', align: 'left', label: 'Steek 5', field: 'Steek_5', sortable: true },
        { name: 'Steek_6', align: 'left', label: 'Steek 6', field: 'Steek_6', sortable: true },
        { name: 'Steek_7', align: 'left', label: 'Steek 7', field: 'Steek_7', sortable: true },
        { name: 'Steek_8', align: 'left', label: 'Steek 8', field: 'Steek_8', sortable: true },
        { name: 'Steek_9', align: 'left', label: 'Steek 9', field: 'Steek_9', sortable: true },
        { name: 'Steek_10', align: 'left', label: 'Steek 10', field: 'Steek_10', sortable: true },
        { name: 'Steek_11', align: 'left', label: 'Steek 11', field: 'Steek_11', sortable: true },
        { name: 'actions', align: 'center', label: 'Actions', field: 'actions' },
      ]"
      row-key="timestamp"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            <div v-if="col.name === 'timestamp'">
              {{ props.row[col.name] }}
            </div>
            <q-badge v-else-if="col.name !== 'actions'" :color="getBadgeColor(props.row[col.name])">
              {{ formatValue(props.row[col.name]) }}
            </q-badge>
            <q-btn
              v-else
              color="negative"
              icon="delete"
              @click="removeMeasurement(props.rowIndex)"
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass">
.my-sticky-column-table
  max-width: 100%

  thead tr:first-child th:first-child
    background-color: #edab40

  td:first-child
    background-color: #edab40
    color: black

  th:first-child,
  td:first-child
    position: sticky
    left: 0
    z-index: 1
    color: black
</style>
