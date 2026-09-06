<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from './AppContainer.vue'
import ConfidentialNotice from './ConfidentialNotice.vue'
import SectionHeading from './SectionHeading.vue'
import TechBadge from './TechBadge.vue'

defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article>
    <header class="border-b border-white/10 py-16 sm:py-24">
      <AppContainer>
        <RouterLink to="/projects" class="text-sm font-bold text-cyan-300 hover:text-cyan-200"
          >← All projects</RouterLink
        >
        <p class="eyebrow mt-10">{{ project.category }}</p>
        <h1 class="mt-4 max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {{ project.title }}
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{{ project.summary }}</p>
        <div class="mt-8 flex flex-wrap gap-2">
          <TechBadge
            v-for="technology in project.technologies"
            :key="technology"
            :label="technology"
          />
        </div>
        <div v-if="project.confidential" class="mt-8 max-w-4xl"><ConfidentialNotice /></div>
      </AppContainer>
    </header>

    <section class="py-16 sm:py-24">
      <AppContainer>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="surface rounded-2xl p-6 lg:col-span-2">
            <p class="eyebrow">Project context</p>
            <p class="mt-4 text-lg leading-8 text-slate-200">{{ project.intro }}</p>
          </div>
          <div class="surface-soft rounded-2xl p-6">
            <p class="eyebrow">Responsibilities</p>
            <ul class="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li v-for="item in project.responsibilities" :key="item" class="flex gap-3">
                <span class="text-cyan-300">◇</span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </AppContainer>
    </section>

    <slot />

    <section class="border-y border-white/10 py-16 sm:py-24">
      <AppContainer>
        <SectionHeading
          eyebrow="Engineering approach"
          title="From system problem to product behavior"
        />
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div class="surface-soft rounded-2xl p-6">
            <h2 class="text-xl font-bold text-white">The challenge</h2>
            <p class="mt-3 leading-7 text-slate-300">{{ project.challenge }}</p>
          </div>
          <div class="surface-soft rounded-2xl p-6">
            <h2 class="text-xl font-bold text-white">The approach</h2>
            <p class="mt-3 leading-7 text-slate-300">{{ project.approach }}</p>
          </div>
        </div>
      </AppContainer>
    </section>

    <section class="py-16 sm:py-24">
      <AppContainer>
        <SectionHeading eyebrow="Capabilities" title="What this work demonstrates" />
        <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="item in project.demonstrated"
            :key="item"
            class="surface-soft rounded-xl p-5 font-semibold text-slate-200"
          >
            <span class="mr-2 text-cyan-300">✓</span>{{ item }}
          </li>
        </ul>
      </AppContainer>
    </section>
  </article>
</template>
