<script lang="ts">
import { defineComponent } from 'vue';

interface Row {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  sodium: number;
  calcium: string;
  iron: string;
}

const columns: { name: string; label: string; field: string | ((row: Row) => string); required?: boolean; align?: 'left' | 'center' | 'right'; sortable?: boolean; sort?: (a: string, b: string) => number }[] = [
  {
    name: 'name',
    label: 'Dessert (100g serving)',
    // field: 'name',
    field: (row: Row) => row.name,
    required: true,
    align: 'left',
    sortable: true,
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a: string, b: string) => parseFloat(a) - parseFloat(b) },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a: string, b: string) => parseFloat(a) - parseFloat(b) }
];


const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%'
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
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="calories" :props="props">
            <q-badge color="green">
              {{ props.row.calories }}
            </q-badge>
          </q-td>
          <q-td key="fat" :props="props">
            <q-badge color="purple">
              {{ props.row.fat }}
            </q-badge>
          </q-td>
          <q-td key="carbs" :props="props">
            <q-badge color="orange">
              {{ props.row.carbs }}
            </q-badge>
          </q-td>
          <q-td key="protein" :props="props">
            <q-badge color="primary">
              {{ props.row.protein }}
            </q-badge>
          </q-td>
          <q-td key="sodium" :props="props">
            <q-badge color="teal">
              {{ props.row.sodium }}
            </q-badge>
          </q-td>
          <q-td key="calcium" :props="props">
            <q-badge color="accent">
              {{ props.row.calcium }}
            </q-badge>
          </q-td>
          <q-td key="iron" :props="props">
            <q-badge color="amber">
              {{ props.row.iron }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<style scoped lang="sass">

</style>
