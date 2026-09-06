<script setup>
import { ref } from 'vue'
const sources = [
  { id: 'aircraft', label: 'Aircraft tracks', detail: 'Continuous positions and route context.' },
  { id: 'cctv', label: 'CCTV streams', detail: 'Video-source connectivity and viewing state.' },
  { id: 'rf', label: 'RF / radio', detail: 'Signal observations and anomaly indicators.' },
]
const active = ref(sources[0])
</script>
<template>
  <section class="surface rounded-3xl p-6 sm:p-8">
    <p class="eyebrow">Correlation model</p>
    <h2 class="mt-3 text-2xl font-bold text-white">Different signals, one operational picture</h2>
    <div class="mt-8 grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
      <div class="grid gap-3">
        <button
          v-for="source in sources"
          :key="source.id"
          type="button"
          :aria-pressed="active.id === source.id"
          :class="[
            'rounded-xl border p-4 text-left font-semibold',
            active.id === source.id
              ? 'border-cyan-300 bg-cyan-300/10 text-cyan-200'
              : 'border-white/15 text-slate-300',
          ]"
          @click="active = source"
        >
          {{ source.label }}
        </button>
      </div>
      <div class="grid place-items-center text-cyan-300" aria-hidden="true">→</div>
      <div
        class="surface-soft grid place-items-center rounded-2xl p-7 text-center"
        aria-live="polite"
      >
        <div>
          <p class="font-mono text-xs text-cyan-300">UNIFIED VIEW</p>
          <h3 class="mt-3 text-xl font-bold text-white">{{ active.label }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-300">{{ active.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
