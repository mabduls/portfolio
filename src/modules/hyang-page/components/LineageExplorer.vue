<script setup>
import { ref } from 'vue'
const nodes = [
  {
    title: 'Source',
    platform: 'Registered resource',
    detail: 'A whitelisted origin made available through a controlled integration boundary.',
  },
  {
    title: 'Pipeline',
    platform: 'Airflow · Hop · NiFi',
    detail: 'Orchestration and movement state surfaced through a unified monitoring experience.',
  },
  {
    title: 'Processing',
    platform: 'Secured proxy',
    detail:
      'Authenticated requests, signed context, token forwarding, caching, and error normalization.',
  },
  {
    title: 'Dataset',
    platform: 'Data product',
    detail:
      'A resulting technical asset that can be connected to ownership and operational context.',
  },
  {
    title: 'Metadata catalog',
    platform: 'OpenMetadata',
    detail: 'Catalog, glossary, and table-lineage context that makes the data asset discoverable.',
  },
]
const activeIndex = ref(0)
</script>
<template>
  <section class="surface rounded-3xl p-6 sm:p-8" aria-labelledby="lineage-title">
    <p class="eyebrow">Conceptual lineage</p>
    <h2 id="lineage-title" class="mt-3 text-2xl font-bold text-white">
      Follow data from source to catalog
    </h2>
    <ol class="mt-8 grid gap-3 md:grid-cols-5">
      <li v-for="(node, index) in nodes" :key="node.title" class="relative">
        <button
          type="button"
          :aria-pressed="activeIndex === index"
          :class="[
            'h-full min-h-28 w-full rounded-xl border p-4 text-left',
            activeIndex === index ? 'border-cyan-300 bg-cyan-300/10' : 'border-white/15',
          ]"
          @click="activeIndex = index"
        >
          <span class="font-mono text-xs text-cyan-300">0{{ index + 1 }}</span
          ><span class="mt-2 block font-bold text-white">{{ node.title }}</span></button
        ><span
          v-if="index < nodes.length - 1"
          class="absolute -right-2 top-1/2 z-10 hidden text-cyan-300 md:block"
          aria-hidden="true"
          >→</span
        >
      </li>
    </ol>
    <div class="surface-soft mt-6 rounded-2xl p-6" aria-live="polite">
      <p class="font-mono text-xs text-cyan-300">{{ nodes[activeIndex].platform }}</p>
      <h3 class="mt-2 text-xl font-bold text-white">{{ nodes[activeIndex].title }}</h3>
      <p class="mt-3 leading-7 text-slate-300">{{ nodes[activeIndex].detail }}</p>
    </div>
  </section>
</template>
