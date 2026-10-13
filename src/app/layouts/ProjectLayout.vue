<script setup>
import AppHeader from '@/shared/components/AppHeader.vue'
import AppFooter from '@/shared/components/AppFooter.vue'
</script>
<template>
  <div class="app-layout">
    <AppHeader />
    <main id="main-content" tabindex="-1"><slot /></main>
    <AppFooter />
  </div>
</template>
