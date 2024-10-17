import { defineStore } from 'pinia'
import { API } from '@/api/ChartsAPI'
import { ref } from 'vue'
import { StartOpts } from '@/renderer/store/interface.charts'

const intervals: ReturnType<typeof setInterval>[] = []

export const UseChartStore = defineStore('charts', () => {
  const paused = ref(false)
  const chartDataA = ref([])
  const chartDataB = ref([])
  const chartDataBars = ref([])
  const properties = ref<StartOpts>({
    startOpts: {
      chartA: { sort: false },
      chartB: { sort: false },
      chartBar: { sort: false }
    }
  })
  const togglePaused = async () => {
    paused.value = !paused.value
    if (paused.value) {
      intervals.forEach((id) => {
        clearInterval(id)
      })
      intervals.splice(0, intervals.length)
    } else {
      await startUpdating(...(Object.values(properties.value.startOpts) as any))
    }
  }
  const updateChartDataA = async (count: number = 10) => {
    const response = await API.getChartData(count, 50, properties.value.startOpts.chartA?.sort)
    chartDataA.value = response?.data?.data
  }
  const updateChartDataB = async (count: number = 10) => {
    const response = await API.getChartData(count, 20, properties.value.startOpts.chartB?.sort)
    chartDataB.value = response?.data?.data
  }
  const updateChartDataBars = async (count: number = 10) => {
    const response = await API.getChartData(count, 40, properties.value.startOpts.chartBar?.sort)
    chartDataBars.value = response?.data?.data
  }
  const startUpdating = async (seconds: number = 10, count: number = 10) => {
    console.log('startUpdating', seconds, count, paused.value)
    if (paused.value) return
    await updateChartDataA(count)
    intervals.push(setInterval(updateChartDataA, seconds * 1000, count))
    intervals.push(setInterval(updateChartDataB, seconds * 1000, count))
    intervals.push(setInterval(updateChartDataBars, seconds * 1000, count))
    properties.value.startOpts = { seconds, count }
  }
  const updateAllCharts = async () => {
    await updateChartDataA()
    await updateChartDataB()
    await updateChartDataBars()
  }
  return {
    chartDataA,
    chartDataB,
    chartDataBars,
    paused,
    properties,
    togglePaused,
    updateChartDataA,
    updateChartDataB,
    updateChartDataBars,
    updateAllCharts,
    startUpdating
  }
})
