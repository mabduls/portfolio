<script setup>
defineProps({
  message: {
    type: String,
    default:
      'This overview describes product capabilities at a high level. Production screens, operational data, and client-sensitive details are not shared.',
  },
})
</script>
<template>
  <p class="confidential-note" role="note"><strong>Confidential project.</strong> {{ message }}</p>
</template>
