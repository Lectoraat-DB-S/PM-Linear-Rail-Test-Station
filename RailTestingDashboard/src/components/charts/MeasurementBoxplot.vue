<template>
  <VueApexCharts type="boxPlot" height="350" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { ApexOptions } from 'apexcharts';

interface BoxPlotData {
  x: string;
  y: [number, number, number, number, number];
}

interface TooltipGlobals {
  labels: string[];
}

interface CustomTooltipParams {
  series: number[][][];
  seriesIndex: number;
  dataPointIndex: number;
  w: {
    globals: TooltipGlobals;
  };
}

export default defineComponent({
  name: 'MeasurementBoxplot',
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: 'box',
          type: 'boxPlot',
          data: [
            {
              x: 'Begin',
              y: [54, 66, 69, 75, 88]
            },
            {
              x: 'Gat 1',
              y: [43, 65, 69, 76, 81]
            },
            {
              x: 'Gat 2',
              y: [31, 39, 45, 51, 59]
            },
            {
              x: 'Gat 3',
              y: [39, 46, 55, 65, 71]
            },
            {
              x: 'Gat 4',
              y: [29, 31, 35, 39, 44]
            },
            {
              x: 'Gat 5',
              y: [32, 42, 52, 62, 72]
            },
            {
              x: 'Gat 6',
              y: [33, 43, 53, 63, 73]
            },
            {
              x: 'Einde',
              y: [34, 44, 54, 64, 74]
            }
          ] as BoxPlotData[]
        }
      ],
      chartOptions: {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        colors: ['#008FFB', '#FEB019'],
        title: {
          text: 'BoxPlot - Scatter Chart',
          align: 'left'
        },
        xaxis: {
          type: 'category',
          title: {
            text: 'Rails'
          }
        },
        yaxis: {
          title: {
            text: 'Afwijking (mm)'
          },
          min: 0,
          max: 100
        },
        tooltip: {
          shared: false,
          intersect: true,
          custom: ({ series, seriesIndex, dataPointIndex, w }: CustomTooltipParams) => {
            const data = series[seriesIndex][dataPointIndex] as [number, number, number, number, number];
            return `<div class="apexcharts-tooltip-boxplot">
                      <div><b>X: </b>${w.globals.labels[dataPointIndex]}</div>
                      <div><b>Max: </b>${data[4]}</div>
                      <div><b>Q3: </b>${data[3]}</div>
                      <div><b>Gemiddelde: </b>${data[2]}</div>
                      <div><b>Q1: </b>${data[1]}</div>
                      <div><b>Min: </b>${data[0]}</div>
                    </div>`;
          }
        }
      } as ApexOptions,
    };
  }
});
</script>

<style scoped>
.apexcharts-tooltip-boxplot {
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}
</style>
