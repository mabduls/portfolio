<script setup>
defineProps({ label: { type: String, required: true } })
</script>

<template>
  <span
    class="rounded-full border border-white/12 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300"
    >{{ label }}</span
  >
</template>
