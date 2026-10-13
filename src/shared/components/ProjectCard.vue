<script setup>
import { RouterLink } from 'vue-router'
import TechBadge from './TechBadge.vue'
import ProjectVisual from './ProjectVisual.vue'

defineProps({
  project: { type: Object, required: true },
  headingLevel: { type: String, default: 'h3' },
})

const captions = {
  aircraft: 'Aircraft positions, flight details & reports',
  border: 'Land sensors, air monitoring & alerts',
  reinsurance: 'Contracts, submissions & review',
  data: 'Sources, quality & data relationships',
}
</script>

<template>
  <article class="project-card">
    <div v-if="project.visual" class="project-card-visual" aria-hidden="true">
      <ProjectVisual :kind="project.visual" />
      <p class="visual-caption">{{ captions[project.visual] }}</p>
    </div>
    <div class="project-card-body">
      <div class="card-meta">
        <span class="domain-label">{{ project.category }}</span>
        <span v-if="project.confidential" class="confidential-label">Confidential</span>
      </div>
      <component :is="headingLevel" class="project-card-title">{{ project.shortTitle }}</component>
      <p class="project-card-summary">{{ project.summary }}</p>
      <div class="badges">
        <TechBadge
          v-for="technology in project.technologies.slice(0, 4)"
          :key="technology"
          :label="technology"
        />
      </div>
      <RouterLink
        :to="project.path"
        class="card-link"
        :aria-label="`Read case study: ${project.title}`"
        >Read case study <span aria-hidden="true">→</span></RouterLink
      >
    </div>
  </article>
</template>
