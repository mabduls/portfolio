<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppContainer from './AppContainer.vue'

const route = useRoute()
const isOpen = ref(false)
const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
]

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
    <AppContainer>
      <div class="flex min-h-18 items-center justify-between gap-6">
        <RouterLink
          to="/"
          class="flex items-center gap-3 font-bold text-white"
          aria-label="Muhammad Abdul Aziz, home"
        >
          <span
            class="grid size-9 place-items-center rounded-lg border border-cyan-300/35 bg-cyan-300/10 font-mono text-sm text-cyan-300"
            >MA</span
          >
          <span class="hidden sm:inline">Muhammad Abdul Aziz</span>
        </RouterLink>
        <button
          class="button-secondary !min-h-10 md:hidden"
          type="button"
          :aria-expanded="isOpen"
          aria-controls="main-navigation"
          @click="isOpen = !isOpen"
        >
          {{ isOpen ? 'Close' : 'Menu' }}
        </button>
        <nav
          id="main-navigation"
          :class="[
            'absolute left-0 right-0 top-full border-b border-white/10 bg-ink-950 px-5 py-4 md:static md:block md:border-0 md:bg-transparent md:p-0',
            isOpen ? 'block' : 'hidden',
          ]"
          aria-label="Primary navigation"
        >
          <ul class="flex flex-col gap-2 md:flex-row md:items-center md:gap-7">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="block rounded-md px-2 py-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
                active-class="!text-cyan-300"
                :aria-current="route.path === link.to ? 'page' : undefined"
                >{{ link.label }}</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/#contact" class="button-primary w-full md:w-auto"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </AppContainer>
  </header>
</template>
