import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/api/chartsAPI'

interface Chart {
  name: string
  type: string
  stack: string // Add the stack property
  data: number[]
  show: boolean
}

export const UseChartStore = defineStore('randomCharts', () => {
  const chartSeries = ref<Chart[]>([])
  const refresh = async (count: number = 10, min = -100, max = 100) => {
    const response = await API.getRandomCharts(count, min, max)
    response?.data?.data.forEach((chart, index) => {
      if (chartSeries.value[index]) {
        chartSeries.value[index].data = chart
      } else {
        chartSeries.value.push({
          name: `series-${index}`,
          type: 'line',
          stack: 'Total',
          data: chart,
          show: false
        })
      }
    })
  }
  return { chartSeries, refresh }
})

export const chartOptions = reactive({
  title: {
    text: 'График'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Union Ads']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      start: 1
    }
  ],
  series: [
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
      show: false
    }
  ]
})
