<script setup>
import CaseStudyPage from '@/shared/components/CaseStudyPage.vue'
import { getProjectBySlug } from '@/shared/data/projects'
const project = getProjectBySlug('csirt-internship')
</script>
<template><CaseStudyPage :project="project" /></template>
