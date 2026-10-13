<script setup>
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'
import AdsbResultsGallery from './components/AdsbResultsGallery.vue'

const project = getProjectBySlug('ads-b-platform')
</script>

<template>
  <CaseStudyPage :project="project">
    <template #results><AdsbResultsGallery /></template>
  </CaseStudyPage>
</template>
