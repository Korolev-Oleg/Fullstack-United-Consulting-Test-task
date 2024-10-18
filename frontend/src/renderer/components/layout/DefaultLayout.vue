<script setup lang="tsx">
import HeaderLayout from '@/renderer/components/layout/HeaderLayout.vue'
import SideBarLayout from '@/renderer/components/layout/NavigationLayout.vue'
</script>

<template>
  <v-app>
    <v-layout>
      <HeaderLayout />
      <SideBarLayout />
      <v-main class="v-main">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style>
.v-main {
  margin-left: -129px;
}
</style>
