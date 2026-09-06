import { onBeforeUnmount, onMounted, ref } from 'vue'

const eventTemplates = [
  { source: 'AIR', message: 'Synthetic aircraft track updated', tone: 'info' },
  { source: 'CCTV', message: 'Conceptual camera source connected', tone: 'info' },
  { source: 'RF', message: 'Synthetic signal anomaly detected', tone: 'warning' },
  { source: 'ALERT', message: 'Demonstration alert acknowledged', tone: 'normal' },
]

export function useEventStream(intervalDuration = 1800) {
  const events = ref([])
  const isStreaming = ref(false)
  let intervalId
  let eventIndex = 0
  let seconds = 8

  function pushEvent() {
    const template = eventTemplates[eventIndex % eventTemplates.length]
    seconds += 2
    events.value = [
      { ...template, id: eventIndex, time: `12:04:${String(seconds).padStart(2, '0')}` },
      ...events.value,
    ].slice(0, 6)
    eventIndex += 1
  }

  function start() {
    if (isStreaming.value) return
    isStreaming.value = true
    if (!events.value.length) pushEvent()
    intervalId = window.setInterval(pushEvent, intervalDuration)
  }

  function pause() {
    isStreaming.value = false
    window.clearInterval(intervalId)
  }
  function reset() {
    pause()
    events.value = []
    eventIndex = 0
    seconds = 8
  }

  onMounted(() => {
    if (!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) start()
  })
  onBeforeUnmount(pause)
  return { events, isStreaming, start, pause, reset, pushEvent }
}
