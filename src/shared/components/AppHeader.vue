<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import AppContainer from './AppContainer.vue'
import { profile } from '@/shared/data/profile'

const route = useRoute()
const isOpen = ref(false)
const menuButton = ref(null)
const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/#contact' },
]

function isCurrent(to) {
  if (to === '/#contact') return route.path === '/' && route.hash === '#contact'
  if (to === '/') return route.path === '/' && !route.hash
  return route.path === to || route.path.startsWith(`${to}/`)
}

function closeMenu(event) {
  if (event.key === 'Escape' && isOpen.value) {
    isOpen.value = false
    menuButton.value?.focus()
  }
}

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="site-header" @keydown="closeMenu">
    <AppContainer class="header-container">
      <div class="header-row">
        <RouterLink to="/" class="brand" :aria-label="`${profile.name}, home`">
          <span class="brand-mark" aria-hidden="true">MA</span>
          <span class="brand-name">{{ profile.name }}</span>
        </RouterLink>
        <button
          ref="menuButton"
          type="button"
          class="button-secondary menu-toggle"
          :aria-expanded="isOpen"
          aria-controls="main-navigation"
          @click="isOpen = !isOpen"
        >
          {{ isOpen ? 'Close' : 'Menu' }}
        </button>
      </div>
      <nav
        id="main-navigation"
        class="main-navigation"
        :class="{ 'is-open': isOpen }"
        aria-label="Primary navigation"
      >
        <ul>
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="nav-link"
              :class="{ 'nav-contact': link.label === 'Contact' }"
              :aria-current="
                isCurrent(link.to) ? (link.to === '/#contact' ? 'location' : 'page') : undefined
              "
              >{{ link.label }}</RouterLink
            >
          </li>
        </ul>
      </nav>
    </AppContainer>
  </header>
</template>
