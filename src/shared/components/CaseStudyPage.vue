<script setup>
import { computed, useSlots } from 'vue'
import { RouterLink } from 'vue-router'
import AppContainer from './AppContainer.vue'
import ConfidentialNotice from './ConfidentialNotice.vue'
import TechBadge from './TechBadge.vue'
import { featuredProjects } from '@/shared/data/projects'

const props = defineProps({ project: { type: Object, required: true } })
const slots = useSlots()
const contribution = computed(
  () =>
    props.project.contribution || (!props.project.featured ? props.project.responsibilities : null),
)
const sections = computed(() => [
  { id: 'overview', label: 'Project overview' },
  ...(contribution.value?.length ? [{ id: 'contribution', label: 'My contribution' }] : []),
  ...(slots.results ? [{ id: 'results', label: 'Project results' }] : []),
  ...(props.project.featureGroups ? [{ id: 'features', label: 'Main features' }] : []),
  { id: 'technical-approach', label: 'Technical approach' },
  { id: 'capabilities', label: 'Application capabilities' },
])
const nextProject = computed(() => {
  const index = featuredProjects.findIndex((project) => project.slug === props.project.slug)
  return featuredProjects[(index + 1) % featuredProjects.length]
})
</script>

<template>
  <article>
    <header class="case-header">
      <AppContainer>
        <RouterLink to="/projects" class="text-link">← All projects</RouterLink>
        <p class="eyebrow">{{ project.category }}</p>
        <h1>{{ project.title }}</h1>
        <p class="case-summary">{{ project.summary }}</p>
        <div class="badges">
          <TechBadge
            v-for="technology in project.technologies.slice(0, 4)"
            :key="technology"
            :label="technology"
          />
        </div>
        <ConfidentialNotice v-if="project.confidential" :message="project.confidentialNotice" />
      </AppContainer>
    </header>
    <AppContainer>
      <div class="case-layout">
        <aside class="contents">
          <details>
            <summary>On this page</summary>
            <nav aria-label="Case study contents">
              <ul>
                <li v-for="section in sections" :key="section.id">
                  <RouterLink :to="`${project.path}#${section.id}`">{{ section.label }}</RouterLink>
                </li>
              </ul>
            </nav>
          </details>
          <div class="contents-desktop">
            <p>On this page</p>
            <nav aria-label="Case study contents">
              <ul>
                <li v-for="section in sections" :key="section.id">
                  <RouterLink :to="`${project.path}#${section.id}`">{{ section.label }}</RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div class="case-article">
          <section id="overview" class="case-section" tabindex="-1">
            <h2>Project overview</h2>
            <p>{{ project.intro }}</p>
            <dl v-if="project.audience" class="case-audience">
              <dt>Who it is designed for</dt>
              <dd>{{ project.audience }}</dd>
            </dl>
            <div v-if="project.context" class="stack-group">
              <h3>The problem it addresses</h3>
              <p>{{ project.context }}</p>
            </div>
          </section>
          <section v-if="contribution?.length" id="contribution" class="case-section" tabindex="-1">
            <h2>My contribution</h2>
            <ul class="capability-list">
              <li v-for="item in contribution" :key="item">{{ item }}</li>
            </ul>
          </section>
          <section v-if="slots.results" id="results" class="case-section" tabindex="-1">
            <h2>Project results</h2>
            <slot name="results" />
          </section>
          <section v-if="project.featureGroups" id="features" class="case-section" tabindex="-1">
            <h2>Main features</h2>
            <p>The main tasks and capabilities represented in the application.</p>
            <div class="feature-grid">
              <div
                v-for="feature in project.featureGroups"
                :key="feature.title"
                class="feature-block"
              >
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.text }}</p>
              </div>
            </div>
          </section>
          <section id="technical-approach" class="case-section" tabindex="-1">
            <h2>Technical approach</h2>
            <template v-if="project.stackGroups">
              <p>The interface, API, and connected services have different responsibilities.</p>
              <figure v-if="project.architecture">
                <div class="architecture">
                  <div
                    v-for="part in project.architecture"
                    :key="part.title"
                    class="architecture-part"
                  >
                    <h3>{{ part.title }}</h3>
                    <p>{{ part.text }}</p>
                  </div>
                </div>
                <figcaption class="figure-caption">
                  A product-level view of responsibilities. External connections depend on
                  deployment configuration.
                </figcaption>
              </figure>
              <div v-for="group in project.stackGroups" :key="group.title" class="stack-group">
                <h3>{{ group.title }}</h3>
                <div class="badges">
                  <TechBadge v-for="tool in group.tools" :key="tool" :label="tool" />
                </div>
                <p>{{ group.text }}</p>
              </div>
              <details v-if="project.implementationNotes?.length" class="notes-disclosure">
                <summary>Implementation details & limitations</summary>
                <ul class="notes-list">
                  <li v-for="note in project.implementationNotes" :key="note">{{ note }}</li>
                </ul>
              </details>
            </template>
            <template v-else>
              <div class="stack-group">
                <h3>Project context</h3>
                <p>{{ project.challenge }}</p>
              </div>
              <div class="stack-group">
                <h3>Approach</h3>
                <p>{{ project.approach }}</p>
              </div>
              <div class="stack-group">
                <h3>Technologies</h3>
                <div class="badges">
                  <TechBadge v-for="tool in project.technologies" :key="tool" :label="tool" />
                </div>
              </div>
            </template>
          </section>
          <section id="capabilities" class="case-section" tabindex="-1">
            <h2>
              {{
                project.deliveredCapabilities
                  ? 'What the application supports'
                  : 'What this work demonstrates'
              }}
            </h2>
            <ul class="capability-list">
              <li v-for="item in project.deliveredCapabilities || project.demonstrated" :key="item">
                {{ item }}
              </li>
            </ul>
            <p v-if="project.featured">
              These describe the documented application capabilities. Live data and connected
              services depend on the configured environment.
            </p>
          </section>
          <div class="case-next">
            <h2>Explore another project</h2>
            <p>{{ nextProject.title }}</p>
            <div class="actions">
              <RouterLink :to="nextProject.path" class="button-primary"
                >Read next case study <span aria-hidden="true">→</span></RouterLink
              ><RouterLink to="/#contact" class="button-secondary">Get in touch</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </article>
</template>
