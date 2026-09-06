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
  <a
    class="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-cyan-300 px-4 py-2 font-bold text-ink-950 transition focus:translate-y-0"
    href="#main-content"
  >
    Skip to content
  </a>
  <component :is="activeLayout">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </component>
</template>
