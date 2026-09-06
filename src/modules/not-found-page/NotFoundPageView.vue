<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from '@/shared/components/AppContainer.vue'
</script>
<template>
  <section class="grid min-h-[70vh] place-items-center py-24">
    <AppContainer
      ><div class="mx-auto max-w-2xl text-center">
        <p class="eyebrow">Error 404</p>
        <h1 class="mt-4 text-5xl font-bold text-white">This route left the radar.</h1>
        <p class="mt-5 text-lg text-slate-300">
          The page may have moved, or the address may be incorrect.
        </p>
        <RouterLink to="/" class="button-primary mt-8">Return home</RouterLink>
      </div></AppContainer
    >
  </section>
</template>
