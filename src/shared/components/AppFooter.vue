<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from './AppContainer.vue'
import { contactLinks, profile } from '@/shared/data/profile'
</script>

<template>
  <footer class="site-footer">
    <AppContainer>
      <div class="footer-layout">
        <p>© {{ new Date().getFullYear() }} {{ profile.name }}</p>
        <nav aria-label="Footer navigation">
          <ul class="footer-links">
            <li><RouterLink to="/projects">Projects</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li v-for="link in contactLinks" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </AppContainer>
  </footer>
</template>
