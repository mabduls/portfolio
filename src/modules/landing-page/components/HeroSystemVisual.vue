<script setup>
const nodes = [
  { x: 72, y: 96, label: 'UI' },
  { x: 212, y: 52, label: 'API' },
  { x: 345, y: 118, label: 'STREAM' },
  { x: 205, y: 202, label: 'DATA' },
  { x: 390, y: 240, label: 'AUTH' },
]
</script>

<template>
  <div
    class="surface relative overflow-hidden rounded-3xl p-4"
    aria-label="Conceptual system data flow"
  >
    <div
      class="mb-3 flex items-center justify-between px-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-slate-500"
    >
      <span>System topology</span><span class="text-cyan-300">● Live</span>
    </div>
    <svg
      viewBox="0 0 470 300"
      class="w-full"
      role="img"
      aria-labelledby="topology-title topology-desc"
    >
      <title id="topology-title">Application system topology</title>
      <desc id="topology-desc">
        A conceptual interface, API, stream, data, and authentication network.
      </desc>
      <defs>
        <linearGradient id="flow" x1="0" x2="1">
          <stop stop-color="#22d3ee" />
          <stop offset="1" stop-color="#fcd34d" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="#334155" stroke-width="1.5">
        <path d="M72 96 212 52 345 118 205 202 72 96M205 202l185 38-45-122M212 52l-7 150" />
      </g>
      <g
        fill="none"
        stroke="url(#flow)"
        stroke-linecap="round"
        stroke-width="2"
        stroke-dasharray="8 14"
        class="flow-lines"
      >
        <path d="M72 96 212 52 345 118" />
        <path d="M345 118 205 202 390 240" />
      </g>
      <g v-for="node in nodes" :key="node.label">
        <circle
          :cx="node.x"
          :cy="node.y"
          r="27"
          fill="#07111f"
          stroke="#67e8f9"
          stroke-opacity=".55"
        />
        <circle :cx="node.x" :cy="node.y" r="4" fill="#67e8f9" />
        <text
          :x="node.x"
          :y="node.y + 44"
          text-anchor="middle"
          fill="#94a3b8"
          font-size="10"
          font-family="monospace"
        >
          {{ node.label }}
        </text>
      </g>
    </svg>
    <div
      class="grid grid-cols-3 gap-2 px-2 pb-2 text-center font-mono text-[0.62rem] text-slate-400"
    >
      <span>EVENTS 2.4K</span><span>LATENCY STABLE</span><span>ACCESS SECURE</span>
    </div>
  </div>
</template>

<style scoped>
.flow-lines {
  animation: flow 8s linear infinite;
}
@keyframes flow {
  to {
    stroke-dashoffset: -88;
  }
}
</style>
