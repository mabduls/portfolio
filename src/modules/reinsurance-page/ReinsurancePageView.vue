<script setup>
import AppContainer from '@/shared/components/AppContainer.vue'
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'
import WorkflowExplorer from './components/WorkflowExplorer.vue'
const project = getProjectBySlug('reinsurance-platform')
</script>
<template>
  <CaseStudyPage :project="project"
    ><section class="pb-16 sm:pb-24">
      <AppContainer><WorkflowExplorer /></AppContainer>
    </section>
    <section class="border-y border-white/10 py-16 sm:py-24">
      <AppContainer
        ><div class="grid gap-5 md:grid-cols-3">
          <article
            v-for="item in [
              {
                title: 'Consistent validation',
                text: 'Manual and bulk paths need shared business expectations and understandable feedback.',
              },
              {
                title: 'Role-aware workflows',
                text: 'Keycloak and RBAC constrain access by responsibility rather than interface location.',
              },
              {
                title: 'Audit visibility',
                text: 'Processing outcomes remain visible through dashboards, notifications, and audit-support flows.',
              },
            ]"
            :key="item.title"
            class="surface-soft rounded-2xl p-6"
          >
            <h2 class="font-bold text-white">{{ item.title }}</h2>
            <p class="mt-3 leading-7 text-slate-300">{{ item.text }}</p>
          </article>
        </div></AppContainer
      >
    </section></CaseStudyPage
  >
</template>
