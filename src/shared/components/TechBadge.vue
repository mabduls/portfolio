<script setup>
defineProps({ label: { type: String, required: true } })
</script>
<template>
  <span class="tech-badge">{{ label }}</span>
</template>
