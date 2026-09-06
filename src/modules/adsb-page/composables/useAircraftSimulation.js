import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  interpolateRoute,
  simulationDuration,
  syntheticAircraft,
} from '../services/adsbSimulation.service'

export function useAircraftSimulation() {
  const isPlaying = ref(false)
  const playbackSpeed = ref(1)
  const selectedAircraftId = ref(null)
  const showTrails = ref(true)
  const showLabels = ref(true)
  const currentTime = ref(0)
  const alertState = ref('normal')
  let animationFrame = 0
  let previousTimestamp = 0

  const aircraft = computed(() =>
    syntheticAircraft.map((item, index) => {
      const offsetProgress =
        ((currentTime.value + index * 18) % simulationDuration) / simulationDuration
      return { ...item, position: interpolateRoute(item.route, offsetProgress) }
    }),
  )
  const selectedAircraft = computed(
    () => aircraft.value.find((item) => item.id === selectedAircraftId.value) || null,
  )

  function tick(timestamp) {
    if (!isPlaying.value) return
    if (previousTimestamp)
      currentTime.value =
        (currentTime.value + ((timestamp - previousTimestamp) / 1000) * playbackSpeed.value) %
        simulationDuration
    previousTimestamp = timestamp
    animationFrame = requestAnimationFrame(tick)
  }

  function play() {
    if (isPlaying.value) return
    isPlaying.value = true
    previousTimestamp = 0
    animationFrame = requestAnimationFrame(tick)
  }

  function pause() {
    isPlaying.value = false
    cancelAnimationFrame(animationFrame)
    animationFrame = 0
    previousTimestamp = 0
  }

  function reset() {
    pause()
    currentTime.value = 0
    playbackSpeed.value = 1
    selectedAircraftId.value = null
    showTrails.value = true
    showLabels.value = true
    alertState.value = 'normal'
  }

  function seek(value) {
    currentTime.value = Math.min(Math.max(Number(value), 0), simulationDuration)
  }
  function selectAircraft(id) {
    selectedAircraftId.value = id
  }
  function setPlaybackSpeed(value) {
    playbackSpeed.value = Number(value)
  }
  function setAlertState(value) {
    alertState.value = value
  }
  function handleVisibility() {
    if (document.hidden) pause()
  }

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibility)
    if (!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) play()
  })
  onBeforeUnmount(() => {
    pause()
    document.removeEventListener('visibilitychange', handleVisibility)
  })

  return {
    aircraft,
    selectedAircraft,
    isPlaying,
    playbackSpeed,
    selectedAircraftId,
    showTrails,
    showLabels,
    currentTime,
    duration: simulationDuration,
    alertState,
    play,
    pause,
    reset,
    seek,
    selectAircraft,
    setPlaybackSpeed,
    setAlertState,
  }
}
