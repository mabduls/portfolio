<script setup>
import AppContainer from '@/shared/components/AppContainer.vue'
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'
import SensorCorrelation from './components/SensorCorrelation.vue'
import SensorDashboard from './components/SensorDashboard.vue'
const project = getProjectBySlug('monitoring-platform')
</script>
<template>
  <CaseStudyPage :project="project"
    ><section class="pb-16 sm:pb-24">
      <AppContainer><SensorDashboard /></AppContainer>
    </section>
    <section class="border-y border-white/10 py-16 sm:py-24">
      <AppContainer><SensorCorrelation /></AppContainer>
    </section>
    <section class="py-16 sm:py-24">
      <AppContainer
        ><div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="item in [
              {
                title: 'Streaming',
                text: 'SSE and WebSocket channels support different live update patterns.',
              },
              {
                title: 'Video delivery',
                text: 'Reverse-proxy and FFmpeg integration support CCTV viewing workflows.',
              },
              {
                title: 'Secure access',
                text: 'Keycloak controls entry to operational capabilities and role-aware views.',
              },
            ]"
            :key="item.title"
            class="surface-soft rounded-2xl p-6"
          >
            <h2 class="text-xl font-bold text-white">{{ item.title }}</h2>
            <p class="mt-3 leading-7 text-slate-300">{{ item.text }}</p>
          </article>
        </div></AppContainer
      >
    </section></CaseStudyPage
  >
</template>
