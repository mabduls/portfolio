<script setup>
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'

const project = getProjectBySlug('hyang-platform')
</script>

<template><CaseStudyPage :project="project" /></template>
