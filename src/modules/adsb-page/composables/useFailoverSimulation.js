import { onBeforeUnmount, ref } from 'vue'

export function useFailoverSimulation(transitionDuration = 650) {
  const status = ref('primary')
  let transitionTimer

  function simulateFailure() {
    if (status.value !== 'primary') return
    status.value = 'switching'
    transitionTimer = window.setTimeout(() => {
      status.value = 'backup'
    }, transitionDuration)
  }

  function restorePrimary() {
    window.clearTimeout(transitionTimer)
    status.value = 'primary'
  }

  onBeforeUnmount(() => window.clearTimeout(transitionTimer))
  return { status, simulateFailure, restorePrimary }
}
