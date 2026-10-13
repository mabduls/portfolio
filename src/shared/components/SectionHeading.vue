<script setup>
defineProps({
  headingLevel: { type: String, default: 'h2' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="section-heading">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <component :is="headingLevel">{{ title }}</component>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>
