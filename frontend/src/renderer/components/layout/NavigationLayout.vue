<script setup lang="ts">
import { UseChartStore } from '@/renderer/store/charts'
import { chart, updateChart } from '@/renderer/components/Chart/services'
const chartStore = UseChartStore()
const sort = (chartProps) => {
  chartProps.sort = !chartProps.sort
  updateChart(chart.value, chartStore)
}
</script>

<template>
  <v-navigation-drawer app permanent>
    <v-checkbox
      label="Сортировка series-1"
      @click="sort(chartStore.properties.startOpts.chartA)"
    ></v-checkbox>
    <v-checkbox
      label="Сортировка series-2"
      @click="sort(chartStore.properties.startOpts.chartB)"
    ></v-checkbox>
    <v-checkbox
      label="Сортировка series-3"
      @click="sort(chartStore.properties.startOpts.chartBar)"
    ></v-checkbox>
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
