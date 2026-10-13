<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from '@/shared/components/AppContainer.vue'
</script>
<template>
  <section class="not-found">
    <AppContainer
      ><p class="eyebrow">Error 404</p>
      <h1>Page not found</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <div class="actions">
        <RouterLink to="/" class="button-primary">Return home</RouterLink
        ><RouterLink to="/projects" class="button-secondary">Browse projects</RouterLink>
      </div></AppContainer
    >
  </section>
</template>
