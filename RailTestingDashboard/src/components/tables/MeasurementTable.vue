<script lang="ts">
import { defineComponent } from 'vue';

interface Row {
  name: string;
  gat_1: number;
  gat_2: number;
  gat_3: number;
  gat_4: number;
  gat_5: number;
  gat_6: number;
  einde: number;
}

const columns: { name: string; label: string; field: string | ((row: Row) => string); required?: boolean; align?: 'left' | 'center' | 'right'; sortable?: boolean; sort?: (a: string, b: string) => number }[] = [
  {
    name: 'name',
    label: 'Metingen batch 1234',
    // field: 'name',
    field: (row: Row) => row.name,
    required: true,
    align: 'left',
    sortable: true,
  },
  { name: 'start', label: 'Start', field: 'start', sortable: true },
  { name: 'gat_1', label: 'Gat 1', field: 'gat_1', sortable: true },
  { name: 'gat_2', label: 'Gat 2', field: 'gat_2', sortable: true },
  { name: 'gat_3', label: 'Gat 3', field: 'gat_3' },
  { name: 'gat_4', label: 'Gat 4', field: 'gat_4' },
  { name: 'gat_5', label: 'Gat 5', field: 'gat_5' },
  { name: 'gat_6', label: 'Gat 6', field: 'gat_6' },
  { name: 'einde', label: 'Einde', field: 'einde' }
];


const rows = [
  {
    name: 'Rail 1',
    start: -0.44,
    gat_1: 0.2,
    gat_2: 0.02,
    gat_3: -0.07,
    gat_4: 0.49,
    gat_5: -0.15,
    gat_6: 0.01,
    einde: 0.03,
  },
  {
    name: 'Rail 2',
    start: -0.2,
    gat_1: 0.02,
    gat_2: -0.07,
    gat_3: 0.49,
    gat_4: -0.15,
    gat_5: 0.01,
    gat_6: 0.03,
    einde: -0.44,
  }
]

export default defineComponent({
  name: 'DashboardPage',
  data() {
    return {
      columns: columns,
      rows: rows
    };
  }

});

</script>

<template>
  <div class="q-pa-md">
    <q-table
      flat bordered
      title="Meetgegevens"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="start" :props="props">
            <q-badge color="purple">
              {{ props.row.start }}
            </q-badge>
          </q-td>
          <q-td key="gat_1" :props="props">
            <q-badge color="green">
              {{ props.row.gat_1 }}
            </q-badge>
          </q-td>
          <q-td key="gat_2" :props="props">
            <q-badge color="green">
              {{ props.row.gat_2 }}
            </q-badge>
          </q-td>
          <q-td key="gat_3" :props="props">
            <q-badge color="green">
              {{ props.row.gat_3 }}
            </q-badge>
          </q-td>
          <q-td key="gat_4" :props="props">
            <q-badge color="green">
              {{ props.row.gat_4 }}
            </q-badge>
          </q-td>
          <q-td key="gat_5" :props="props">
            <q-badge color="red">
              {{ props.row.gat_5 }}
            </q-badge>
          </q-td>
          <q-td key="gat_6" :props="props">
            <q-badge color="green">
              {{ props.row.gat_6 }}
            </q-badge>
          </q-td>
          <q-td key="einde" :props="props">
            <q-badge color="purple">
              {{ props.row.einde }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass">

</style>
