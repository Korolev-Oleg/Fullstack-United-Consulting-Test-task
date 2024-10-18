<script setup lang="tsx">
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

import Echart from '@/renderer/components/Chart/Echart.vue'

const { availableLocales } = useI18n()
const languages = ref(['en'])
const appVersion = ref('Unknown')

onMounted((): void => {
  languages.value = availableLocales
  getApplicationVersionFromMainProcess()
})

const getApplicationVersionFromMainProcess = (): void => {
  window.mainApi.invoke('msgRequestGetVersion').then((result: string) => {
    appVersion.value = result
  })
}
</script>

<template>
  <v-container>
    <!--    <ChartComponent />-->
    <Echart />
  </v-container>
</template>
<style>
#chart {
  width: calc(100vw - 288px);
}
</style>
