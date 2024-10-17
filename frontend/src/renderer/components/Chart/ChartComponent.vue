<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { nextTick, onMounted, ref } from 'vue'
import { UseChartStore } from '@/renderer/store/charts'
import { storeToRefs } from 'pinia'
import { chart, updateChart } from '@/renderer/components/Chart/services'

const chartStore = UseChartStore()
const { chartDataA, chartDataB, chartDataBars } = storeToRefs(chartStore)
const data = ref({
  options: {
    chart: {
      id: 'series',
      group: 'social',
      type: 'area',
      height: 1600,
      events: {
        legendClick: (chartContext, seriesIndex, config) => {
          chartStore.paused = true
        }
      }
    }
  },
  series: [
    {
      name: 'series-1',
      data: chartStore.chartDataA,
      type: 'line'
    },
    {
      name: 'series-2',
      data: chartStore.chartDataB,
      type: 'line',
      group: 'social'
    },
    {
      name: 'bar-1',
      data: chartStore.chartDataBars,
      type: 'column'
    }
  ]
})

onMounted(async () => {
  await chartStore.updateAllCharts()
  await updateChart(chart.value, chartStore)
  setInterval(updateChart, 1000, chart.value, chartStore)
})
</script>

<template>
  <div id="chart">
    <VueApexCharts
      ref="chart"
      type="area"
      :options="data.options"
      :series="data.series"
    ></VueApexCharts>
  </div>
</template>
