import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/renderer/App.vue'
import router from '@/renderer/router'
import vuetify from '@/renderer/plugins/vuetify'
import i18n from '@/renderer/plugins/i18n'
import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'
window.axios = axios
// Add API key defined in contextBridge to window object type
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    mainApi?: any
  }
}

const app = createApp(App)

app.use(vuetify).use(i18n).use(router).use(createPinia()).use(VueApexCharts)
app.mount('#app')
