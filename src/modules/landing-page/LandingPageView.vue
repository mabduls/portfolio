<script setup>
import { RouterLink } from 'vue-router'
import AppContainer from '@/shared/components/AppContainer.vue'
import ProjectCard from '@/shared/components/ProjectCard.vue'
import SectionHeading from '@/shared/components/SectionHeading.vue'
import ContactSection from '@/shared/components/ContactSection.vue'
import { featuredProjects } from '@/shared/data/projects'
import { capabilities, experience, profile } from '@/shared/data/profile'
</script>

<template>
  <div>
    <section class="hero">
      <AppContainer>
        <div class="hero-content">
          <p class="eyebrow">Software development portfolio</p>
          <h1>{{ profile.name }}</h1>
          <p class="hero-role">{{ profile.role }}</p>
          <p class="hero-description">{{ profile.statement }}</p>
          <div class="actions">
            <RouterLink to="/projects" class="button-primary"
              >View projects <span aria-hidden="true">→</span></RouterLink
            >
            <RouterLink to="/#contact" class="button-secondary">Get in touch</RouterLink>
          </div>
          <div class="hero-skills" aria-label="Primary technologies">
            <span>Vue.js & React</span><span>Node.js APIs</span
            ><span>Data & system integration</span>
          </div>
        </div>
      </AppContainer>
    </section>

    <section class="section section-bordered">
      <AppContainer>
        <div class="section-title-row">
          <SectionHeading
            eyebrow="Selected work"
            title="Four projects. Different problems."
            description="Aircraft tracking, reinsurance operations, data governance, and border monitoring—explained through the applications and the work behind them."
          />
          <RouterLink to="/projects" class="text-link"
            >View all projects <span aria-hidden="true">→</span></RouterLink
          >
        </div>
        <div class="project-grid">
          <ProjectCard v-for="project in featuredProjects" :key="project.slug" :project="project" />
        </div>
      </AppContainer>
    </section>

    <section class="section section-surface section-bordered">
      <AppContainer>
        <SectionHeading
          eyebrow="Skills & experience"
          title="From interface to API."
          description="A practical toolkit for building applications and connecting them to the services they depend on."
        />
        <div class="skills-grid">
          <article v-for="capability in capabilities" :key="capability.title" class="skill-block">
            <h3>{{ capability.title }}</h3>
            <p>{{ capability.text }}</p>
            <ul class="skills-list">
              <li v-for="tool in capability.tools" :key="tool">{{ tool }}</li>
            </ul>
          </article>
        </div>
        <div class="experience-preview">
          <div>
            <h3>Experience</h3>
            <RouterLink to="/about" class="text-link"
              >More about me <span aria-hidden="true">→</span></RouterLink
            >
          </div>
          <div>
            <h3>{{ experience[0].organization }}</h3>
            <p class="experience-role">{{ experience[0].role }}</p>
            <p>{{ experience[0].detail }}</p>
          </div>
        </div>
      </AppContainer>
    </section>
    <ContactSection />
  </div>
</template>
