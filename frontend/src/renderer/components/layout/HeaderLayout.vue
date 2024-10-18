<script setup lang="tsx">
import { chartRef, collapseSeries, refreshChartData } from '@/renderer/components/Chart/services'
import { UseChartStore } from '@/renderer/store/apexChartStore'
import { useTheme } from 'vuetify'
const theme = useTheme()
const handleChangeTheme = (): void => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const chartStore = UseChartStore()
</script>
<template>
  <v-app-bar color="primary" density="compact">
    <v-btn icon="mdi-update" variant="tonal" @click="refreshChartData(chartStore)"> </v-btn>
    <v-btn variant="tonal" icon color="white" @click="handleChangeTheme">
      <v-icon icon="mdi-brightness-6" />
      <v-tooltip activator="parent" location="bottom">
        {{ $t('menu.change-theme') }}
      </v-tooltip>
    </v-btn>
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
