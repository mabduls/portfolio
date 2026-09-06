<script setup>
import { ref } from 'vue'
const steps = [
  {
    title: 'CSV upload',
    detail:
      'Accept structured bulk debtor, claim, or contract input through a controlled entry point.',
  },
  {
    title: 'Validation',
    detail: 'Check shape and business expectations before data reaches persistence workflows.',
  },
  {
    title: 'Processing',
    detail: 'Transform accepted records into application operations with explicit error handling.',
  },
  {
    title: 'Persistence',
    detail: 'Store valid records through Prisma and PostgreSQL-backed service boundaries.',
  },
  {
    title: 'Audit trail',
    detail: 'Preserve workflow visibility for operational review and audit-support needs.',
  },
  {
    title: 'Dashboard & notification',
    detail: 'Return processing outcomes to users through status, dashboards, and notifications.',
  },
]
const activeIndex = ref(0)
</script>
<template>
  <section class="surface rounded-3xl p-6 sm:p-8" aria-labelledby="workflow-title">
    <p class="eyebrow">Interactive workflow</p>
    <h2 id="workflow-title" class="mt-3 text-2xl font-bold text-white">
      From bulk input to visible outcome
    </h2>
    <div class="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
      <ol class="grid gap-3 sm:grid-cols-2">
        <li v-for="(step, index) in steps" :key="step.title">
          <button
            type="button"
            :aria-pressed="activeIndex === index"
            :class="[
              'h-full w-full rounded-xl border p-4 text-left',
              activeIndex === index
                ? 'border-cyan-300 bg-cyan-300/10'
                : 'border-white/15 hover:border-cyan-300/40',
            ]"
            @click="activeIndex = index"
          >
            <span class="font-mono text-xs text-cyan-300">0{{ index + 1 }}</span
            ><span class="mt-2 block font-bold text-white">{{ step.title }}</span>
          </button>
        </li>
      </ol>
      <div class="surface-soft rounded-2xl p-6" aria-live="polite">
        <p class="font-mono text-xs text-cyan-300">SELECTED STAGE</p>
        <h3 class="mt-3 text-2xl font-bold text-white">{{ steps[activeIndex].title }}</h3>
        <p class="mt-4 leading-7 text-slate-300">{{ steps[activeIndex].detail }}</p>
        <p class="mt-6 border-t border-white/10 pt-5 text-sm text-slate-400">
          Access to every stage is governed by authenticated, role-aware application workflows.
        </p>
      </div>
    </div>
  </section>
</template>
