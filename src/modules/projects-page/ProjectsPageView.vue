<script setup>
import { computed, ref } from 'vue'
import AppContainer from '@/shared/components/AppContainer.vue'
import ProjectCard from '@/shared/components/ProjectCard.vue'
import { orderedProjects, projectCategories } from '@/shared/data/projects'

const selectedCategory = ref('All')
const categories = ['All', ...projectCategories]
const filteredProjects = computed(() =>
  orderedProjects.filter(
    (project) => selectedCategory.value === 'All' || project.category === selectedCategory.value,
  ),
)
const featured = computed(() => filteredProjects.value.filter((project) => project.featured))
const additional = computed(() => filteredProjects.value.filter((project) => !project.featured))
const resetFilters = () => {
  selectedCategory.value = 'All'
}
</script>

<template>
  <div>
    <header class="page-intro">
      <AppContainer
        ><p class="eyebrow">Projects</p>
        <h1>Applications with a clear purpose.</h1>
        <p>
          Explore what each project does, the tasks it supports, and the technologies behind it.
          Start with the overview, then go deeper into the technical details.
        </p></AppContainer
      >
    </header>
    <section class="section">
      <AppContainer>
        <div class="filter-section">
          <fieldset>
            <legend>Filter by project area</legend>
            <div class="filter-options">
              <button
                v-for="category in categories"
                :key="category"
                type="button"
                class="filter-button"
                :aria-pressed="selectedCategory === category"
                @click="selectedCategory = category"
              >
                {{ category }}
              </button>
            </div>
          </fieldset>
        </div>
        <div class="filter-status">
          <p aria-live="polite" aria-atomic="true">
            {{ filteredProjects.length }} project{{ filteredProjects.length === 1 ? '' : 's' }}
          </p>
          <button
            v-if="selectedCategory !== 'All'"
            type="button"
            class="text-link filter-reset"
            @click="resetFilters"
          >
            Reset filters
          </button>
        </div>
        <section v-if="featured.length" class="project-group" aria-labelledby="selected-projects">
          <h2 id="selected-projects">Selected projects</h2>
          <div class="project-grid project-grid-index">
            <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
          </div>
        </section>
        <section v-if="additional.length" class="project-group" aria-labelledby="additional-work">
          <h2 id="additional-work">Additional work</h2>
          <div class="project-grid project-grid-index">
            <ProjectCard v-for="project in additional" :key="project.slug" :project="project" />
          </div>
        </section>
        <div v-if="!filteredProjects.length" class="empty-state">
          <h2>No matching projects</h2>
          <p>Try another project area.</p>
          <button type="button" class="button-primary actions" @click="resetFilters">
            Reset filters
          </button>
        </div>
      </AppContainer>
    </section>
  </div>
</template>
