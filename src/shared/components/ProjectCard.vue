<script setup>
import { RouterLink } from 'vue-router'
import TechBadge from './TechBadge.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article
    class="surface group flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-300/35"
  >
    <div class="mb-5 flex items-start justify-between gap-4">
      <span class="eyebrow !tracking-wider">{{ project.category }}</span>
      <span
        v-if="project.confidential"
        class="rounded-full border border-amber-300/25 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-amber-200"
        >Confidential</span
      >
    </div>
    <h3 class="text-xl font-bold text-white">
      <RouterLink :to="project.path" class="after:absolute after:inset-0">{{
        project.shortTitle
      }}</RouterLink>
    </h3>
    <p class="mt-3 flex-1 text-sm leading-6 text-slate-300">{{ project.summary }}</p>
    <div class="mt-5 flex flex-wrap gap-2">
      <TechBadge
        v-for="technology in project.technologies.slice(0, 4)"
        :key="technology"
        :label="technology"
      />
    </div>
    <p class="mt-6 text-sm font-bold text-cyan-300">
      Open case study <span aria-hidden="true">→</span>
    </p>
  </article>
</template>

<style scoped>
article {
  position: relative;
}
</style>
