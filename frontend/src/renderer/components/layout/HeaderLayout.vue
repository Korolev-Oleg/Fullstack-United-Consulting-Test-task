<script setup lang="tsx">
import { UseChartStore } from '@/renderer/store/charts'
import { chart, updateChart } from '@/renderer/components/Chart/services'

const chartStore = UseChartStore()
</script>
<template>
  <v-app-bar color="primary" density="compact">
    <v-btn
      :icon="chartStore.paused ? 'mdi-play' : 'mdi-pause'"
      variant="tonal"
      @click="chartStore.togglePaused"
    >
    </v-btn>
    <!--    <v-btn-->
    <!--      icon="mdi-update"-->
    <!--      variant="tonal"-->
    <!--      @click="updateChart(chart, chartStore)"-->
    <!--    >-->
    <!--    </v-btn>-->
  </v-app-bar>
</template>
<style scoped>
.v-btn {
  opacity: 0.4;
}

.active {
  opacity: 1 !important;
}
</style>
