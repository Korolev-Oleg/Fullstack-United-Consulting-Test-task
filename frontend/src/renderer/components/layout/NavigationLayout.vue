<script setup lang="ts">
import { UseChartStore } from '@/renderer/store/apexChartStore'
import { collapseSeries, toggleSeries } from '@/renderer/components/Chart/services'

const chartStore = UseChartStore()
const toggleCheckbox = (chartInstance) => {
  if (!chartInstance) return
  chartInstance.isCollapsed = !chartInstance.isCollapsed
  console.log(chartInstance.isCollapsed)
  toggleSeries(chartInstance.name)
}
</script>
<template>
  <v-navigation-drawer permanent>
    <div v-for="(chart, index) in chartStore.chartSeries">
      <v-checkbox :model-value="true" :label="chart.name" @click="toggleSeries(index)"></v-checkbox>
    </div>
  </v-navigation-drawer>

  <v-main style="height: 250px"></v-main>
</template>

<style>
#side-bar {
  background: blue;
  width: 260px;
  position: relative;
  top: 48px;
}
.v-input__details {
  display: none !important;
}
</style>
