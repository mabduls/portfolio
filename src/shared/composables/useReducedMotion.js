import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)
  let mediaQuery

  const updatePreference = (event) => {
    prefersReducedMotion.value = event.matches
  }

  onMounted(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mediaQuery.matches
    mediaQuery.addEventListener?.('change', updatePreference)
  })

  onBeforeUnmount(() => mediaQuery?.removeEventListener?.('change', updatePreference))

  return { prefersReducedMotion }
}
