<script setup lang="tsx">
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

import { useTheme } from 'vuetify'
import ChartComponent from '@/renderer/components/Chart/ChartComponent.vue'
const { availableLocales } = useI18n()
const languages = ref(['en'])
const appVersion = ref('Unknown')
const theme = useTheme()

const handleChangeTheme = (): void => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

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
    <ChartComponent />
    <v-btn icon color="primary" @click="handleChangeTheme">
      <v-icon icon="mdi-brightness-6" />
      <v-tooltip activator="parent" location="bottom">
        {{ $t('menu.change-theme') }}
      </v-tooltip>
    </v-btn>
  </v-container>
</template>
<style>
#chart {
  max-width: 80vw;
  //max-height: 30vh;
}
</style>
