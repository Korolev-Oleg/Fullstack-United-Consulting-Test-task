<script setup lang="ts">
import { chartOptions, UseChartStore } from '@/renderer/store/apexChartStore'
import { chartRef, toggleSeries, refreshChartData } from '@/renderer/components/Chart/services'
import { ref, onMounted } from 'vue'
import type { ComposeOption } from 'echarts/core'
import { use } from 'echarts/core'
import type { LineSeriesOption } from 'echarts/charts'
import { LineChart } from 'echarts/charts'
import VChart from 'vue-echarts'
import type {
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption
} from 'echarts/components'
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
// provide(THEME_KEY, 'dark');

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  DataZoomComponent
])

type EChartsOption = ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | LineSeriesOption
>

const store = UseChartStore()
onMounted(() => {
  store.refresh()
  refreshChartData(store)
})
</script>

<template>
  <div class="chart-wrapper">
    <v-chart ref="chartRef" class="chart" :option="chartOptions" autoresize />
  </div>
</template>

<style scoped>
.chart {
  height: 80vh;
  width: calc(100vw - 300px);
}
</style>
