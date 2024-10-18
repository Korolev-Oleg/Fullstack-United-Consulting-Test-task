import { ref } from 'vue'
import { chartOptions } from '@/renderer/store/apexChartStore'

interface ChartInstance {
  hideSeries: (name: string) => void
  toggleSeries: (name: string) => void
  dispatchAction: (action: { type: string; name: string }) => void
}
export const chartRef = ref<ChartInstance | null>(null)

export const collapseSeries = async (chartStore) => {
  console.log('collapse series')
  chartStore.chartsData.forEach((chartInstance, index) => {
    console.log('is collapsed', index, chartInstance.isCollapsed)
    if (chartInstance.isCollapsed) {
      console.log(chartInstance)
      chartRef.value?.hideSeries(chartInstance.name)
    }
  })
}

export const toggleSeries = (index) => {
  const chartInstance = chartRef.value
  console.log('toggle series', chartOptions.series)

  if (chartInstance) {
    const currentShow = chartOptions.series[0].show
    chartOptions.series[index].show = !currentShow
    chartInstance.dispatchAction({
      type: 'legendToggleSelect',
      name: chartOptions.series[index].name
    })
  }
}

export const refreshChartData = (store) => {
  store.refresh()
  chartOptions.series = store.chartSeries
}
