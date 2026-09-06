<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from '@/shared/components/AppContainer.vue'
import ProjectCard from '@/shared/components/ProjectCard.vue'
import SectionHeading from '@/shared/components/SectionHeading.vue'
import TechBadge from '@/shared/components/TechBadge.vue'
import { projects } from '@/shared/data/projects'
import { capabilities, experience, profile } from '@/shared/data/profile'
import HeroSystemVisual from './components/HeroSystemVisual.vue'

const featuredProjects = projects.filter((project) => project.featured)
const coreStack = [
  'Vue.js',
  'React',
  'Node.js',
  'Fastify',
  'Express',
  'PostgreSQL',
  'Prisma',
  'Keycloak',
  'SSE',
  'WebSocket',
]
</script>

<template>
  <div>
    <section class="py-18 sm:py-28">
      <AppContainer>
        <div class="grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p class="eyebrow">Fullstack Developer · Real-time systems</p>
            <h1
              class="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            >
              Building software that makes complex systems
              <span class="text-cyan-300">understandable.</span>
            </h1>
            <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {{ profile.statement }} Experienced across interactive frontends, backend services,
              streaming data, secure integration, and production-oriented platforms.
            </p>
            <div class="mt-9 flex flex-col gap-3 sm:flex-row">
              <RouterLink to="/projects" class="button-primary"
                >Explore selected work <span aria-hidden="true">→</span></RouterLink
              ><RouterLink to="/about" class="button-secondary">About my approach</RouterLink>
            </div>
            <dl class="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <dt class="text-xs text-slate-500">Focus</dt>
                <dd class="mt-1 font-mono text-sm text-white">REAL-TIME</dd>
              </div>
              <div>
                <dt class="text-xs text-slate-500">Scope</dt>
                <dd class="mt-1 font-mono text-sm text-white">FULLSTACK</dd>
              </div>
              <div>
                <dt class="text-xs text-slate-500">Mindset</dt>
                <dd class="mt-1 font-mono text-sm text-white">PRODUCTION</dd>
              </div>
            </dl>
          </div>
          <HeroSystemVisual />
        </div>
      </AppContainer>
    </section>

    <section class="border-y border-white/10 bg-ink-900/60 py-16 sm:py-24">
      <AppContainer
        ><SectionHeading
          eyebrow="Selected work"
          title="Systems built around real operational problems"
          description="Case studies cover the interface, service, data, security, and reliability decisions behind the work."
        />
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
        </div>
        <RouterLink to="/projects" class="button-secondary mt-8"
          >View all projects</RouterLink
        ></AppContainer
      >
    </section>

    <section class="py-16 sm:py-24">
      <AppContainer
        ><SectionHeading
          eyebrow="Capabilities"
          title="Working across the product boundary"
          description="The strongest engineering outcomes happen when frontend behavior, backend constraints, security, and operations are considered together."
        />
        <div class="mt-10 grid gap-5 sm:grid-cols-2">
          <article
            v-for="(capability, index) in capabilities"
            :key="capability.title"
            class="surface-soft rounded-2xl p-6"
          >
            <span class="font-mono text-xs text-cyan-300">0{{ index + 1 }}</span>
            <h3 class="mt-4 text-xl font-bold text-white">{{ capability.title }}</h3>
            <p class="mt-3 leading-7 text-slate-300">{{ capability.text }}</p>
          </article>
        </div></AppContainer
      >
    </section>

    <section class="border-y border-white/10 py-16 sm:py-24">
      <AppContainer
        ><div class="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Technology"
              title="A practical fullstack toolkit"
              description="Tools are selected for the system constraint—not for decoration."
            />
            <div class="mt-8 flex flex-wrap gap-2">
              <TechBadge v-for="technology in coreStack" :key="technology" :label="technology" />
            </div>
          </div>
          <div>
            <p class="eyebrow">Experience</p>
            <ol class="mt-6 space-y-6">
              <li
                v-for="item in experience"
                :key="item.organization"
                class="border-l border-cyan-300/30 pl-5"
              >
                <h3 class="font-bold text-white">{{ item.organization }}</h3>
                <p class="mt-1 text-sm font-semibold text-cyan-300">{{ item.role }}</p>
                <p class="mt-2 text-sm leading-6 text-slate-300">{{ item.detail }}</p>
              </li>
            </ol>
          </div>
        </div></AppContainer
      >
    </section>

    <section class="py-16 sm:py-24">
      <AppContainer
        ><div class="surface overflow-hidden rounded-3xl p-7 sm:p-10">
          <div class="grid gap-10 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p class="eyebrow">Flagship case study</p>
              <h2 class="mt-4 text-3xl font-bold text-white sm:text-4xl">
                See a synthetic aircraft stream become an operational interface.
              </h2>
              <p class="mt-5 max-w-2xl leading-7 text-slate-300">
                The ADS-B case study demonstrates playback, selection, alert states, route trails,
                and a primary-to-backup failover concept without exposing confidential information.
              </p>
              <RouterLink to="/projects/ads-b-platform" class="button-primary mt-7"
                >Launch the simulation</RouterLink
              >
            </div>
            <div
              class="surface-soft grid min-h-56 place-items-center rounded-2xl p-6"
              aria-hidden="true"
            >
              <div class="relative size-44 rounded-full border border-cyan-300/20">
                <div
                  class="absolute left-1/2 top-1/2 h-px w-32 -translate-x-1/2 -rotate-12 bg-cyan-300/40"
                ></div>
                <span class="absolute left-8 top-16 text-2xl text-cyan-300">✈</span
                ><span
                  class="absolute bottom-7 right-7 size-3 rounded-full bg-amber-300 shadow-[0_0_18px_#fcd34d]"
                ></span>
              </div>
            </div>
          </div></div
      ></AppContainer>
    </section>

    <section
      id="contact"
      class="border-t border-white/10 bg-ink-900/60 py-16 sm:py-24"
      tabindex="-1"
    >
      <AppContainer
        ><div class="max-w-3xl">
          <p class="eyebrow">Contact</p>
          <h2 class="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Open to thoughtful engineering conversations.
          </h2>
          <p class="mt-5 text-lg leading-8 text-slate-300">
            Verified public contact links have not been added to this portfolio yet. In the
            meantime, explore the case studies to understand how I approach product, system, and
            reliability problems.
          </p>
          <RouterLink to="/projects" class="button-secondary mt-7">Review case studies</RouterLink>
        </div></AppContainer
      >
    </section>
  </div>
</template>
