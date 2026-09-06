<script setup>
import AppHeader from '@/shared/components/AppHeader.vue'
import AppFooter from '@/shared/components/AppFooter.vue'
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip">
    <div
      class="app-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
      aria-hidden="true"
    ></div>
    <AppHeader />
    <main id="main-content" tabindex="-1"><slot /></main>
    <AppFooter />
  </div>
</template>
