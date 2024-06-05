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
    formatValue(value: string | number | undefined): string {
      if (value === undefined || value === null) return '-';
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
        { name: 'Steek_11', align: 'left', label: 'Steek 11', field: 'Steek_11', sortable: true }
      ]"
      row-key="Steek_1"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Steek_1" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_1) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_2" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_2) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_3" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_3) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_4" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_4) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_5" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_5) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_6" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_6) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_7" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_7) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_8" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_8) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_9" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_9) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_10" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_10) }}
            </q-badge>
          </q-td>
          <q-td key="Steek_11" :props="props">
            <q-badge color="green">
              {{ formatValue(props.row.Steek_11) }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass">
</style>
