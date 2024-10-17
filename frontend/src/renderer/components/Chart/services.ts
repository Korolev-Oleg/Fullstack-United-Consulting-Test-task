import { nextTick, ref } from 'vue'

export const chart = ref(null)
export const updateChart = async (chart, store) => {
  if (store.paused) return
  await store.updateAllCharts()
  await nextTick()
  if (chart.updateSeries) {
    chart.updateSeries([
      { name: 'series-1', data: store.chartDataA },
      { name: 'series-2', data: store.chartDataB },
      { name: 'bar-1', data: store.chartDataBars }
    ])
    // currentSeries.forEach((isVisible, index) => {
    //   chart.value.series
    //   if (!isVisible) {
    //     chart.value.toggleSeries(chart.value.seriesNames[index]);
    //   }
    // });
  }
}
