<script setup>
import { reactive } from 'vue'
import { useEventStream } from '../composables/useEventStream'

const layers = reactive({ aircraft: true, cctv: true, rf: true, alerts: true })
const layerOptions = [
  { key: 'aircraft', label: 'Aircraft' },
  { key: 'cctv', label: 'CCTV' },
  { key: 'rf', label: 'RF / radio' },
  { key: 'alerts', label: 'Alerts' },
]
const { events, isStreaming, start, pause, reset } = useEventStream()
</script>

<template>
  <section class="surface overflow-hidden rounded-3xl" aria-labelledby="sensor-demo-title">
    <div class="border-b border-white/10 p-6">
      <p class="eyebrow">Synthetic multi-sensor concept</p>
      <h2 id="sensor-demo-title" class="mt-3 text-2xl font-bold text-white">
        Unified monitoring surface
      </h2>
      <fieldset class="mt-6 flex flex-wrap gap-2">
        <legend class="sr-only">Visible sensor layers</legend>
        <button
          v-for="option in layerOptions"
          :key="option.key"
          type="button"
          :aria-pressed="layers[option.key]"
          :class="[
            'rounded-full border px-4 py-2 text-sm font-semibold',
            layers[option.key]
              ? 'border-cyan-300 bg-cyan-300/10 text-cyan-300'
              : 'border-white/15 text-slate-500',
          ]"
          @click="layers[option.key] = !layers[option.key]"
        >
          {{ option.label }}
        </button>
      </fieldset>
    </div>
    <div class="grid lg:grid-cols-[1fr_22rem]">
      <div
        class="relative min-h-[28rem] overflow-hidden bg-[#071523]"
        aria-label="Conceptual sensor layer visualization"
      >
        <div class="app-grid absolute inset-0 opacity-80" aria-hidden="true"></div>
        <svg class="absolute inset-0 size-full" viewBox="0 0 600 430" aria-hidden="true">
          <path
            d="M20 250c90-75 150-30 230-115s160 18 320-75M50 375c110-70 225-15 305-90s135-30 225-85"
            fill="none"
            stroke="#1e3a4d"
            stroke-width="2"
          />
          <circle
            v-if="layers.rf"
            cx="390"
            cy="185"
            r="70"
            fill="none"
            stroke="#fcd34d"
            stroke-opacity=".25"
          />
          <circle
            v-if="layers.rf"
            cx="390"
            cy="185"
            r="42"
            fill="none"
            stroke="#fcd34d"
            stroke-opacity=".45"
          />
        </svg>
        <div v-if="layers.aircraft" class="absolute left-[24%] top-[31%] text-2xl text-cyan-300">
          <span class="inline-block rotate-45">✈</span
          ><span class="ml-2 font-mono text-[0.65rem]">SYN-AIR-07</span>
        </div>
        <div v-if="layers.aircraft" class="absolute left-[69%] top-[62%] text-2xl text-cyan-300">
          <span class="inline-block rotate-12">✈</span
          ><span class="ml-2 font-mono text-[0.65rem]">SYN-AIR-12</span>
        </div>
        <div
          v-if="layers.cctv"
          class="absolute left-[16%] top-[71%] rounded-lg border border-violet-300/40 bg-violet-300/10 px-3 py-2 font-mono text-xs text-violet-200"
        >
          ▣ CCTV-02
        </div>
        <div
          v-if="layers.cctv"
          class="absolute right-[13%] top-[18%] rounded-lg border border-violet-300/40 bg-violet-300/10 px-3 py-2 font-mono text-xs text-violet-200"
        >
          ▣ CCTV-08
        </div>
        <div
          v-if="layers.rf"
          class="absolute left-[63%] top-[39%] rounded-lg bg-amber-300 px-3 py-2 font-mono text-xs font-bold text-ink-950"
        >
          ⌁ RF SIGNAL
        </div>
        <div
          v-if="layers.alerts"
          class="absolute left-[47%] top-[52%] animate-pulse rounded-lg border border-danger-400/50 bg-danger-400/15 px-3 py-2 font-mono text-xs text-rose-200"
        >
          ! SYNTHETIC ALERT
        </div>
        <p
          class="absolute bottom-4 left-4 rounded bg-ink-950/85 px-3 py-2 font-mono text-[0.65rem] text-slate-400"
        >
          SANITIZED LAYERS · CONCEPTUAL POSITIONS
        </p>
      </div>
      <aside class="border-t border-white/10 p-5 lg:border-l lg:border-t-0">
        <div class="flex items-center justify-between gap-4">
          <h3 class="font-bold text-white">Event stream</h3>
          <button
            type="button"
            class="text-sm font-bold text-cyan-300"
            @click="isStreaming ? pause() : start()"
          >
            {{ isStreaming ? 'Pause' : 'Start' }}
          </button>
        </div>
        <p class="mt-2 text-xs text-slate-500">Synthetic events arrive on a deterministic loop.</p>
        <ol class="mt-5 space-y-3" aria-live="polite" aria-label="Synthetic monitoring events">
          <li
            v-for="event in events"
            :key="event.id"
            class="rounded-lg border border-white/10 bg-black/15 p-3"
          >
            <div class="flex gap-2 font-mono text-[0.65rem]">
              <span class="text-slate-500">{{ event.time }}</span
              ><span :class="event.tone === 'warning' ? 'text-amber-300' : 'text-cyan-300'">{{
                event.source
              }}</span>
            </div>
            <p class="mt-2 text-xs leading-5 text-slate-300">{{ event.message }}</p>
          </li>
        </ol>
        <div
          v-if="!events.length"
          class="mt-5 rounded-lg border border-dashed border-white/15 p-5 text-sm text-slate-500"
        >
          Stream paused. Start it to add synthetic events.
        </div>
        <button type="button" class="mt-4 text-xs text-slate-400 underline" @click="reset">
          Clear stream
        </button>
      </aside>
    </div>
  </section>
</template>
