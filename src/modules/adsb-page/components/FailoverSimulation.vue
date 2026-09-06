<script setup>
import { computed } from 'vue'
import { useFailoverSimulation } from '../composables/useFailoverSimulation'
const { status, simulateFailure, restorePrimary } = useFailoverSimulation()
const message = computed(
  () =>
    ({
      primary: 'Primary source is serving the stream.',
      switching: 'Primary source degraded. Rerouting traffic…',
      backup: 'Backup source is serving the stream.',
    })[status.value],
)
</script>

<template>
  <section class="surface rounded-3xl p-6 sm:p-8" aria-labelledby="failover-title">
    <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
      <div>
        <p class="eyebrow">Reliability concept</p>
        <h2 id="failover-title" class="mt-3 text-2xl font-bold text-white">
          Primary-to-backup failover
        </h2>
        <p class="mt-3 max-w-2xl text-slate-300">
          Trigger a sanitized state transition to see how operational continuity can be
          communicated.
        </p>
      </div>
      <button
        v-if="status === 'primary'"
        type="button"
        class="button-secondary"
        @click="simulateFailure"
      >
        Simulate primary failure</button
      ><button v-else type="button" class="button-secondary" @click="restorePrimary">
        Restore primary
      </button>
    </div>
    <div class="mt-9 grid items-center gap-3 text-center sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      <div
        :class="[
          'rounded-xl border p-5',
          status === 'primary'
            ? 'border-cyan-300/50 bg-cyan-300/10'
            : 'border-danger-400/40 bg-danger-400/8',
        ]"
      >
        <p class="font-bold text-white">Primary source</p>
        <p class="mt-1 font-mono text-xs text-slate-400">
          {{ status === 'primary' ? 'ACTIVE' : 'DEGRADED' }}
        </p>
      </div>
      <span class="text-slate-600" aria-hidden="true">→</span>
      <div class="rounded-xl border border-white/15 p-5">
        <p class="font-bold text-white">Streaming service</p>
        <p class="mt-1 font-mono text-xs text-slate-400">ROUTING</p>
      </div>
      <span class="text-slate-600" aria-hidden="true">→</span>
      <div
        :class="[
          'rounded-xl border p-5',
          status === 'backup' ? 'border-amber-300/50 bg-amber-300/10' : 'border-white/15',
        ]"
      >
        <p class="font-bold text-white">Backup source</p>
        <p class="mt-1 font-mono text-xs text-slate-400">
          {{ status === 'backup' ? 'ACTIVE' : 'STANDBY' }}
        </p>
      </div>
    </div>
    <p class="mt-6 rounded-lg bg-black/20 p-4 font-mono text-sm text-slate-300" aria-live="polite">
      STATUS · {{ message }}
    </p>
  </section>
</template>
