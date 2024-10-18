import axios, { AxiosInstance } from 'axios'

export class ChartsAPI {
  private client: AxiosInstance
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:8085',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async getChartData(count: number = 10, limit: number = 100, sort: boolean = false) {
    return this.client.get('/chart/a', { params: { count, limit, sort } })
  }

  async getRandomCharts(
    count: number = 10,
    minimum: number = 100,
    maximum: number = 100,
    sort: boolean = false
  ) {
    return this.client.get('/chart/arrays', { params: { count, minimum, maximum, sort } })
  }
}

export const API = new ChartsAPI()
