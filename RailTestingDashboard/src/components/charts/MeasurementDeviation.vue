<script lang="ts">
import VueApexCharts from "vue3-apexcharts";

export default {
  name : 'MeasurementDeviation',
  components: {
    VueApexCharts,
  },
  data(){
    return{
      series: [{
        name: 'Desktops',
        data: [-0.44, 0.2, 0.02, -0.07, 0.49, -0.15, 0.01, 0.03]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          annotations: {
            yaxis: [{
              y: 0,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396',
                },
                text: 'Support',
              }
            }, {
              y: 0.3,
              y2: -0.3,
              borderColor: '#000',
              fillColor: '#FEB019',
              opacity: 0.2,
              label: {
                borderColor: '#333',
                style: {
                  fontSize: '10px',
                  color: '#333',
                  background: '#FEB019',
                },
                text: 'Y-axis range',
              }
            }],
          },
        },
        colors: ['#545454'],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Begin', 'Gat 1', 'Gat 2', 'Gat 3', 'Gat 4', 'Gat 5', 'Gat 6', 'Einde'],
          title: {
            text: 'Rails'
          }
        },
        yaxis: {
          title: {
            text: 'Afwijking (mm)'
          },
          min: -1,
          max: 1
        },
      },
    }
  }
}
</script>

<template>
  <VueApexCharts type="line" height="350" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<style scoped lang="sass">

</style>
