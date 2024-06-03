<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Measurement {
  [key: string]: string | number;
}

export default defineComponent({
  name: 'MeasurementTable',
  props: {
    measurements: {
      type: Array as PropType<Measurement[]>,
      required: true
    }
  },
  methods: {
    formatValue(value: string | number): string {
      const num = parseFloat(value as string);
      if (isNaN(num)) return value.toString();
      return num.toFixed(2);
    }
  }
});
</script>

<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Meetgegevens"
      :rows="measurements"
      :columns="[
        { name: 'Hole_1', align: 'left', label: 'Hole 1', field: 'Hole_1', sortable: true },
        { name: 'Hole_2', align: 'left', label: 'Hole 2', field: 'Hole_2', sortable: true },
        { name: 'Hole_3', align: 'left', label: 'Hole 3', field: 'Hole_3', sortable: true },
        { name: 'Hole_4', align: 'left', label: 'Hole 4', field: 'Hole_4', sortable: true },
        { name: 'Hole_5', align: 'left', label: 'Hole 5', field: 'Hole_5', sortable: true },
        { name: 'Hole_6', align: 'left', label: 'Hole 6', field: 'Hole_6', sortable: true },
        { name: 'Hole_7', align: 'left', label: 'Hole 7', field: 'Hole_7', sortable: true },
        { name: 'Hole_8', align: 'left', label: 'Hole 8', field: 'Hole_8', sortable: true },
        { name: 'Hole_9', align: 'left', label: 'Hole 9', field: 'Hole_9', sortable: true },
        { name: 'Hole_10', align: 'left', label: 'Hole 10', field: 'Hole_10', sortable: true },
        { name: 'Hole_11', align: 'left', label: 'Hole 11', field: 'Hole_11', sortable: true },
        { name: 'Hole_12', align: 'left', label: 'Hole 12', field: 'Hole_12', sortable: true }
      ]"
      row-key="Hole_1"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Hole_1" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_1) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_2" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_2) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_3" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_3) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_4" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_4) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_5" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_5) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_6" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_6) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_7" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_7) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_8" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_8) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_9" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_9) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_10" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_10) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_11" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_11) }}
            </q-badge>
          </q-td>
          <q-td key="Hole_12" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Hole_12) }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass">
</style>
