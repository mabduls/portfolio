<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from '@/app/layouts/DefaultLayout.vue'
import ProjectLayout from '@/app/layouts/ProjectLayout.vue'

const route = useRoute()
const layouts = { default: DefaultLayout, project: ProjectLayout }
const activeLayout = computed(() => layouts[route.meta.layout] || DefaultLayout)
</script>

<template>
  <a class="skip-link" href="#main-content"> Skip to content </a>
  <component :is="activeLayout">
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="route.path" />
    </RouterView>
  </component>
</template>
