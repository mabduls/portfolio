<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from '@/shared/components/AppContainer.vue'
import SectionHeading from '@/shared/components/SectionHeading.vue'
import { capabilities, experience, profile } from '@/shared/data/profile'
</script>

<template>
  <div>
    <header class="page-intro">
      <AppContainer
        ><p class="eyebrow">About</p>
        <h1>Hi, I’m Abdul.</h1>
        <p>{{ profile.summary }}</p>
        <div class="actions">
          <RouterLink to="/projects" class="button-primary"
            >Explore my work <span aria-hidden="true">→</span></RouterLink
          ><RouterLink to="/#contact" class="button-secondary">Get in touch</RouterLink>
        </div></AppContainer
      >
    </header>
    <section class="section">
      <AppContainer>
        <div class="about-layout">
          <div>
            <h2>Experience</h2>
            <ol class="experience-list">
              <li v-for="item in experience" :key="item.organization">
                <h3>{{ item.organization }}</h3>
                <p class="experience-role">{{ item.role }}</p>
                <p class="experience-detail">{{ item.detail }}</p>
              </li>
            </ol>
          </div>
          <div>
            <h2>Education</h2>
            <div class="education">
              <h3>{{ profile.education.degree }}</h3>
              <p>{{ profile.education.institution }}</p>
              <p class="period">{{ profile.education.period }}</p>
            </div>
          </div>
        </div>
      </AppContainer>
    </section>
    <section class="section section-surface section-bordered">
      <AppContainer
        ><SectionHeading title="Skills I bring to a project" />
        <div class="skills-grid">
          <article v-for="capability in capabilities" :key="capability.title" class="skill-block">
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.text }}</p>
            <ul class="skills-list">
              <li v-for="tool in capability.tools" :key="tool">{{ tool }}</li>
            </ul>
          </article>
        </div></AppContainer
      >
    </section>
  </div>
</template>
