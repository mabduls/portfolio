<script setup>
import AppContainer from './AppContainer.vue'
</script>

<template>
  <footer class="border-t border-white/10 py-9 text-sm text-slate-400">
    <AppContainer>
      <div class="flex flex-col justify-between gap-3 sm:flex-row">
        <p>© {{ new Date().getFullYear() }} Muhammad Abdul Aziz.</p>
        <p class="font-mono text-xs">Built as an engineering product with Vue.</p>
      </div>
    </AppContainer>
  </footer>
</template>
