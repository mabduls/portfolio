<script setup>
import AppContainer from '@/shared/components/AppContainer.vue'
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'
import LineageExplorer from './components/LineageExplorer.vue'
const project = getProjectBySlug('hyang-platform')
const controls = [
  { title: 'Identity & roles', text: 'Keycloak tokens, refresh handling, role mapping, and RBAC.' },
  {
    title: 'Signed requests',
    text: 'HMAC-SHA256 signatures and timestamp validation establish request integrity.',
  },
  {
    title: 'Replay protection',
    text: 'Previously observed signed requests are rejected instead of trusted again.',
  },
  {
    title: 'Constrained proxies',
    text: 'Resource whitelisting and token forwarding narrow the backend integration surface.',
  },
  {
    title: 'Resilient behavior',
    text: 'Caching and normalized errors keep integrations understandable during failure.',
  },
  {
    title: 'Automated verification',
    text: 'Authentication and proxy tests protect the security boundary as behavior changes.',
  },
]
</script>
<template>
  <CaseStudyPage :project="project"
    ><section class="pb-16 sm:pb-24">
      <AppContainer><LineageExplorer /></AppContainer>
    </section>
    <section class="border-y border-white/10 py-16 sm:py-24">
      <AppContainer
        ><p class="eyebrow">Security model</p>
        <h2 class="mt-3 max-w-3xl text-3xl font-bold text-white">
          Layered controls around every integration
        </h2>
        <div class="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="control in controls"
            :key="control.title"
            class="surface-soft rounded-2xl p-6"
          >
            <h3 class="font-bold text-white">{{ control.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-slate-300">{{ control.text }}</p>
          </article>
        </div></AppContainer
      >
    </section></CaseStudyPage
  >
</template>
