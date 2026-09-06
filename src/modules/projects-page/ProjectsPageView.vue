<script setup>
import { computed, ref } from 'vue'
import AppContainer from '@/shared/components/AppContainer.vue'
import ProjectCard from '@/shared/components/ProjectCard.vue'
import SectionHeading from '@/shared/components/SectionHeading.vue'
import { projectCategories, projects, projectTechnologies } from '@/shared/data/projects'

const selectedCategory = ref('All')
const selectedTechnology = ref('All')
const categories = ['All', ...projectCategories]
const filteredProjects = computed(() =>
  projects.filter(
    (project) =>
      (selectedCategory.value === 'All' || project.category === selectedCategory.value) &&
      (selectedTechnology.value === 'All' ||
        project.technologies.includes(selectedTechnology.value)),
  ),
)
const resetFilters = () => {
  selectedCategory.value = 'All'
  selectedTechnology.value = 'All'
}
</script>

<template>
  <section class="py-16 sm:py-24">
    <AppContainer>
      <SectionHeading
        eyebrow="Project index"
        heading-level="h1"
        title="Engineering case studies"
        description="Explore work across real-time monitoring, geospatial systems, enterprise workflows, secure data platforms, and fullstack delivery."
      />
      <div class="mt-10 border-y border-white/10 py-6">
        <fieldset>
          <legend class="mb-3 text-sm font-bold text-white">Filter by category</legend>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              :class="[
                'rounded-full border px-4 py-2 text-sm font-semibold transition',
                selectedCategory === category
                  ? 'border-cyan-300 bg-cyan-300 text-ink-950'
                  : 'border-white/15 text-slate-300 hover:border-cyan-300/50',
              ]"
              :aria-pressed="selectedCategory === category"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </fieldset>
        <label class="mt-6 block max-w-sm text-sm font-bold text-white"
          >Filter by technology<select
            v-model="selectedTechnology"
            class="mt-2 block w-full rounded-lg border border-white/15 bg-ink-850 px-3 py-2.5 font-normal text-slate-200"
          >
            <option>All</option>
            <option v-for="technology in projectTechnologies" :key="technology">
              {{ technology }}
            </option>
          </select></label
        >
      </div>
      <div class="mt-7 flex items-center justify-between gap-4">
        <p class="font-mono text-sm text-slate-400" aria-live="polite">
          {{ filteredProjects.length }} project{{ filteredProjects.length === 1 ? '' : 's' }}
        </p>
        <button
          v-if="selectedCategory !== 'All' || selectedTechnology !== 'All'"
          type="button"
          class="text-sm font-bold text-cyan-300"
          @click="resetFilters"
        >
          Reset filters
        </button>
      </div>
      <div v-if="filteredProjects.length" class="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
      </div>
      <div v-else class="surface mt-7 rounded-2xl p-10 text-center">
        <h2 class="text-xl font-bold text-white">No matching case studies</h2>
        <p class="mt-2 text-slate-300">Try another category or technology.</p>
        <button type="button" class="button-primary mt-6" @click="resetFilters">
          Reset filters
        </button>
      </div>
    </AppContainer>
  </section>
</template>
