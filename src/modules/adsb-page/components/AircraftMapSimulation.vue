<script setup>
import { useAircraftSimulation } from '../composables/useAircraftSimulation'

const {
  aircraft,
  selectedAircraft,
  isPlaying,
  playbackSpeed,
  selectedAircraftId,
  showTrails,
  showLabels,
  currentTime,
  duration,
  alertState,
  play,
  pause,
  reset,
  seek,
  selectAircraft,
  setPlaybackSpeed,
  setAlertState,
} = useAircraftSimulation()
const formatTime = (seconds) => `T+${String(Math.floor(seconds)).padStart(3, '0')}s`
</script>

<template>
  <section class="surface overflow-hidden rounded-3xl" aria-labelledby="simulation-title">
    <div
      class="flex flex-col gap-3 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p class="eyebrow">Synthetic live-data concept</p>
        <h2 id="simulation-title" class="mt-2 text-2xl font-bold text-white">
          Aircraft track simulation
        </h2>
      </div>
      <span
        :class="[
          'w-fit rounded-full border px-3 py-1 font-mono text-xs uppercase',
          alertState === 'normal'
            ? 'border-cyan-300/30 text-cyan-300'
            : alertState === 'warning'
              ? 'border-amber-300/40 text-amber-200'
              : 'border-danger-400/40 text-danger-400',
        ]"
        >{{ alertState }} state</span
      >
    </div>

    <div class="grid lg:grid-cols-[1fr_18rem]">
      <div class="relative min-h-[25rem] overflow-hidden bg-[#071523]">
        <svg
          class="absolute inset-0 size-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="map-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0H0V10" fill="none" stroke="#334155" stroke-width=".18" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#map-grid)" />
          <path
            d="M4 52C18 43 25 46 35 34s18-4 27-15 25-3 34-9M7 78c18-6 27 6 42-1s24 4 46-7"
            fill="none"
            stroke="#1e3a4d"
            stroke-width=".6"
          />
          <polyline
            v-for="item in aircraft"
            v-show="showTrails"
            :key="item.id"
            :points="item.route.map((point) => `${point.x},${point.y}`).join(' ')"
            fill="none"
            :stroke="selectedAircraftId === item.id ? '#fcd34d' : '#22d3ee'"
            stroke-opacity=".48"
            stroke-width=".55"
            stroke-dasharray="2 1.5"
          />
        </svg>
        <button
          v-for="item in aircraft"
          :key="item.id"
          type="button"
          :class="[
            'absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition',
            selectedAircraftId === item.id
              ? 'bg-amber-300 text-ink-950 shadow-[0_0_22px_#fcd34d]'
              : 'bg-cyan-300 text-ink-950 shadow-[0_0_18px_#22d3ee66]',
          ]"
          :style="{ left: `${item.position.x}%`, top: `${item.position.y}%` }"
          :aria-label="`Select ${item.callsign}`"
          @click="selectAircraft(item.id)"
        >
          <span class="block rotate-45 text-lg" aria-hidden="true">✈</span
          ><span
            v-if="showLabels"
            class="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded bg-ink-950/90 px-2 py-1 font-mono text-[0.6rem] text-white"
            >{{ item.callsign }}</span
          >
        </button>
        <div
          class="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-ink-950/80 p-3 font-mono text-[0.65rem] text-slate-400"
        >
          CONCEPTUAL MAP · NO OPERATIONAL COORDINATES
        </div>
      </div>

      <aside class="border-t border-white/10 p-5 lg:border-l lg:border-t-0" aria-live="polite">
        <p class="eyebrow">Selected track</p>
        <div v-if="selectedAircraft" class="mt-5">
          <h3 class="text-2xl font-bold text-white">{{ selectedAircraft.callsign }}</h3>
          <dl class="mt-5 space-y-4 text-sm">
            <div>
              <dt class="text-slate-500">Synthetic ID</dt>
              <dd class="mt-1 font-mono text-slate-200">{{ selectedAircraft.id }}</dd>
            </div>
            <div>
              <dt class="text-slate-500">Altitude</dt>
              <dd class="mt-1 text-slate-200">{{ selectedAircraft.altitude }}</dd>
            </div>
            <div>
              <dt class="text-slate-500">Ground speed</dt>
              <dd class="mt-1 text-slate-200">{{ selectedAircraft.speed }}</dd>
            </div>
            <div>
              <dt class="text-slate-500">Route</dt>
              <dd class="mt-1 text-slate-200">{{ selectedAircraft.routeLabel }}</dd>
            </div>
          </dl>
        </div>
        <p v-else class="mt-5 text-sm leading-6 text-slate-400">
          Select an aircraft marker to inspect its synthetic track details.
        </p>
      </aside>
    </div>

    <div class="border-t border-white/10 p-5">
      <div class="flex flex-wrap items-center gap-2">
        <button
          type="button"
          class="button-primary !min-h-10"
          @click="isPlaying ? pause() : play()"
        >
          {{ isPlaying ? 'Pause' : 'Play' }}</button
        ><button type="button" class="button-secondary !min-h-10" @click="reset">Reset</button
        ><label class="ml-auto text-sm text-slate-300"
          >Speed
          <select
            :value="playbackSpeed"
            class="ml-2 rounded-md border border-white/15 bg-ink-900 px-2 py-2"
            @change="setPlaybackSpeed($event.target.value)"
          >
            <option :value="0.5">0.5×</option>
            <option :value="1">1×</option>
            <option :value="2">2×</option>
            <option :value="4">4×</option>
          </select></label
        >
      </div>
      <label class="mt-5 flex items-center gap-3 text-sm text-slate-300"
        ><span class="font-mono text-xs">{{ formatTime(currentTime) }}</span
        ><input
          class="w-full accent-cyan-300"
          type="range"
          min="0"
          :max="duration"
          step="1"
          :value="currentTime"
          aria-label="Simulation timeline"
          @input="seek($event.target.value)"
      /></label>
      <div class="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
        <label
          ><input v-model="showTrails" class="mr-2 accent-cyan-300" type="checkbox" />Route
          trails</label
        ><label
          ><input v-model="showLabels" class="mr-2 accent-cyan-300" type="checkbox" />Labels</label
        >
        <fieldset class="flex flex-wrap gap-2">
          <legend class="sr-only">Alert state</legend>
          <button
            v-for="state in ['normal', 'warning', 'critical']"
            :key="state"
            type="button"
            :aria-pressed="alertState === state"
            :class="[
              'rounded-md border px-3 py-1 capitalize',
              alertState === state ? 'border-cyan-300 text-cyan-300' : 'border-white/15',
            ]"
            @click="setAlertState(state)"
          >
            {{ state }}
          </button>
        </fieldset>
      </div>
    </div>
  </section>
</template>
