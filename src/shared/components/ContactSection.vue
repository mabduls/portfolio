<script setup>
import AppContainer from './AppContainer.vue'
import SectionHeading from './SectionHeading.vue'
import { contactLinks } from '@/shared/data/profile'
</script>

<template>
  <section id="contact" class="section section-surface section-bordered" tabindex="-1">
    <AppContainer>
      <div class="contact-layout">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about your next project."
          description="For opportunities or a conversation about my work, send me an email or connect on LinkedIn."
        />
        <ul class="contact-list">
          <li v-for="link in contactLinks" :key="link.label">
            <a :href="link.href">
              <span
                ><span class="contact-label">{{ link.label }}</span
                ><span class="contact-detail">{{ link.detail }}</span></span
              >
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </AppContainer>
  </section>
</template>
