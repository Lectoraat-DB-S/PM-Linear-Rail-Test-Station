<template>
  <VueApexCharts type="boxPlot" height="350" :options="chartOptions" :series="series"></VueApexCharts>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useMeasurementStore } from 'stores/measurements';

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
  setup() {
    const measurementStore = useMeasurementStore();

    const calculateStatistics = (measurements: number[]): [number, number, number, number, number] => {
      const min = Math.min(...measurements);
      const max = Math.max(...measurements);
      const mean = measurements.reduce((a, b) => a + b, 0) / measurements.length;
      const stdDev = Math.sqrt(measurements.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / measurements.length);
      const q1 = mean - stdDev;
      const q3 = mean + stdDev;
      return [min, q1, mean, q3, max];
    };

    const series = computed(() => {
      const data = measurementStore.measurements.map((measurement, index) => {
        const values = Object.keys(measurement)
          .filter(key => key.startsWith('Steek'))
          .map(key => Number(measurement[key]));
        const stats = calculateStatistics(values);
        return {
          x: `M ${index + 1}`,
          y: stats
        };
      });
      return [
        {
          name: 'box',
          type: 'boxPlot',
          data: data as BoxPlotData[]
        }
      ];
    });

    const chartOptions: ApexOptions = {
      chart: {
        type: 'boxPlot',
        height: 350
      },
      colors: ['#008FFB', '#FEB019'],
      title: {
        text: 'BoxPlot - Measurement Data',
        align: 'left'
      },
      xaxis: {
        type: 'category',
        title: {
          text: 'Measurements'
        }
      },
      yaxis: {
        title: {
          text: 'Values'
        }
      },
      tooltip: {
        shared: false,
        intersect: true,
        custom: ({ series, seriesIndex, dataPointIndex, w }: CustomTooltipParams) => {
          const data = series[seriesIndex][dataPointIndex] as [number, number, number, number, number];
          const label = w.globals.labels[dataPointIndex];
          return `<div class="apexcharts-tooltip-boxplot">
                    <div><b>Measurement: </b>${label}</div>
                    <div><b>Min: </b>${data[0]}</div>
                    <div><b>Q1: </b>${data[1]}</div>
                    <div><b>Mean: </b>${data[2]}</div>
                    <div><b>Q3: </b>${data[3]}</div>
                    <div><b>Max: </b>${data[4]}</div>
                  </div>`;
        }
      }
    };

    return {
      series,
      chartOptions
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
