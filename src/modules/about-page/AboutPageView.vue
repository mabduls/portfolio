<script setup>
import AppContainer from '@/shared/components/AppContainer.vue'
import SectionHeading from '@/shared/components/SectionHeading.vue'
import { capabilities, experience, principles, profile } from '@/shared/data/profile'
</script>

<template>
  <div>
    <section class="py-16 sm:py-24">
      <AppContainer
        ><p class="eyebrow">About</p>
        <h1 class="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Engineering across interfaces, services, data, and operations.
        </h1>
        <p class="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          {{ profile.summary }}
        </p></AppContainer
      >
    </section>
    <section class="border-y border-white/10 bg-ink-900/60 py-16 sm:py-24">
      <AppContainer
        ><SectionHeading eyebrow="Approach" title="Principles that shape the implementation" />
        <ol class="mt-10 grid gap-5 sm:grid-cols-2">
          <li
            v-for="(principle, index) in principles"
            :key="principle"
            class="surface-soft flex items-start gap-4 rounded-2xl p-6"
          >
            <span class="font-mono text-cyan-300">0{{ index + 1 }}</span
            ><span class="text-lg font-semibold text-white">{{ principle }}</span>
          </li>
        </ol></AppContainer
      >
    </section>
    <section class="py-16 sm:py-24">
      <AppContainer
        ><div class="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Experience" title="Production-oriented project work" />
            <ol class="mt-8 space-y-7">
              <li
                v-for="item in experience"
                :key="item.organization"
                class="border-l border-cyan-300/30 pl-5"
              >
                <h3 class="font-bold text-white">{{ item.organization }}</h3>
                <p class="mt-1 text-sm text-cyan-300">{{ item.role }}</p>
                <p class="mt-2 leading-7 text-slate-300">{{ item.detail }}</p>
              </li>
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Education" title="Informatics foundation" />
            <div class="surface mt-8 rounded-2xl p-7">
              <p class="text-xl font-bold text-white">{{ profile.education.degree }}</p>
              <p class="mt-2 text-cyan-300">{{ profile.education.institution }}</p>
              <p class="mt-4 font-mono text-sm text-slate-400">{{ profile.education.period }}</p>
            </div>
          </div>
        </div></AppContainer
      >
    </section>
    <section class="border-t border-white/10 py-16 sm:py-24">
      <AppContainer
        ><SectionHeading eyebrow="Breadth" title="Capabilities developed through the work" />
        <div class="mt-10 grid gap-5 sm:grid-cols-2">
          <article
            v-for="capability in capabilities"
            :key="capability.title"
            class="surface-soft rounded-2xl p-6"
          >
            <h3 class="text-xl font-bold text-white">{{ capability.title }}</h3>
            <p class="mt-3 leading-7 text-slate-300">{{ capability.text }}</p>
          </article>
        </div></AppContainer
      >
    </section>
  </div>
</template>
