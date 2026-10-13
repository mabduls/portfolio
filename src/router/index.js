import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { routes } from '@/app/router/routes'
import { env } from '@/shared/config/env'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash)
      return {
        el: to.hash,
        top: 88,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      }
    return { top: 0 }
  },
})

function setMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(property ? 'property' : 'name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

router.afterEach(async (to) => {
  const title = to.meta.title || 'Muhammad Abdul Aziz — Fullstack Developer'
  const description = to.meta.description || 'Engineering portfolio of Muhammad Abdul Aziz.'
  document.title = title
  setMeta('description', description)
  setMeta('og:title', title, true)
  setMeta('og:description', description, true)

  if (env.siteUrl) {
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = new URL(to.path, env.siteUrl).toString()
  }

  await nextTick()
  const target = to.hash
    ? document.getElementById(to.hash.slice(1))
    : document.querySelector('#main-content')
  target?.focus({ preventScroll: true })
})

export default router
