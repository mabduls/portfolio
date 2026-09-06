<script setup>
defineProps({
  headingLevel: { type: String, default: 'h2' },
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
})
</script>

<template>
  <div class="max-w-3xl">
    <p v-if="eyebrow" class="eyebrow mb-3">{{ eyebrow }}</p>
    <component
      :is="headingLevel"
      class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >{{ title }}</component
    >
    <p v-if="description" class="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>
