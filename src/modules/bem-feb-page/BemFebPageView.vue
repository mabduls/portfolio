<script setup>
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'
const project = getProjectBySlug('bem-feb')
</script>
<template><CaseStudyPage :project="project" /></template>
