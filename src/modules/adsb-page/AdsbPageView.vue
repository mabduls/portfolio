<script setup>
import AppContainer from '@/shared/components/AppContainer.vue'
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import SectionHeading from '@/shared/components/SectionHeading.vue'
import { getProjectBySlug } from '@/shared/data/projects'
import AircraftMapSimulation from './components/AircraftMapSimulation.vue'
import FailoverSimulation from './components/FailoverSimulation.vue'
const project = getProjectBySlug('ads-b-platform')
const flow = [
  'Aircraft messages',
  'Streaming service',
  'Processing & enrichment',
  'Realtime API',
  'Operational interface',
]
</script>

<template>
  <CaseStudyPage :project="project">
    <section class="pb-16 sm:pb-24">
      <AppContainer><AircraftMapSimulation /></AppContainer>
    </section>
    <section class="border-y border-white/10 py-16 sm:py-24">
      <AppContainer
        ><SectionHeading
          eyebrow="Data flow"
          title="Separate the stream from the experience"
          description="A conceptual view of responsibilities—not a production infrastructure diagram."
        />
        <ol class="mt-10 grid gap-3 md:grid-cols-5">
          <li
            v-for="(item, index) in flow"
            :key="item"
            class="surface-soft relative rounded-xl p-5"
          >
            <span class="font-mono text-xs text-cyan-300">0{{ index + 1 }}</span>
            <p class="mt-3 font-bold text-white">{{ item }}</p>
            <span
              v-if="index < flow.length - 1"
              class="absolute -right-2 top-1/2 z-10 hidden text-cyan-300 md:block"
              aria-hidden="true"
              >→</span
            >
          </li>
        </ol></AppContainer
      >
    </section>
    <section class="py-16 sm:py-24">
      <AppContainer><FailoverSimulation /></AppContainer>
    </section>
    <section class="border-t border-white/10 py-16 sm:py-24">
      <AppContainer
        ><div class="grid gap-6 md:grid-cols-2">
          <div class="surface-soft rounded-2xl p-6">
            <p class="eyebrow">Security boundary</p>
            <h2 class="mt-3 text-xl font-bold text-white">Identity before operational data</h2>
            <p class="mt-3 leading-7 text-slate-300">
              Keycloak and JWT-based access place authentication and authorization in front of
              monitoring, reporting, playback, and historical retrieval workflows.
            </p>
          </div>
          <div class="surface-soft rounded-2xl p-6">
            <p class="eyebrow">Operational health</p>
            <h2 class="mt-3 text-xl font-bold text-white">Make degradation visible</h2>
            <p class="mt-3 leading-7 text-slate-300">
              Health monitoring, backup aggregation, and failover mechanisms are treated as product
              states that operators must be able to understand.
            </p>
          </div>
        </div></AppContainer
      >
    </section>
  </CaseStudyPage>
</template>
