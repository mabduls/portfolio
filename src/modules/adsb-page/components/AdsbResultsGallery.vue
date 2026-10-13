<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { adsbImages } from '../data/adsbGallery'

const currentIndex = ref(0)
const currentImage = computed(() => adsbImages[currentIndex.value])
const previewLoaded = ref(false)
const previewError = ref(false)
const fullImageLoaded = ref(false)
const fullImageError = ref(false)
const viewerOpen = ref(false)
const zoomed = ref(false)
const viewer = ref(null)
const viewerCanvas = ref(null)
const thumbnails = []
let viewerTrigger = null
let previousOverflow = null

async function selectImage(index, focusThumbnail = false) {
  const nextIndex = (index + adsbImages.length) % adsbImages.length
  if (nextIndex !== currentIndex.value) {
    previewLoaded.value = false
    previewError.value = false
    fullImageLoaded.value = false
    fullImageError.value = false
    zoomed.value = false
    currentIndex.value = nextIndex
  }
  await nextTick()
  viewerCanvas.value?.scrollTo({ top: 0, left: 0 })
  if (!viewerOpen.value) {
    const thumbnail = thumbnails[nextIndex]
    const strip = thumbnail?.parentElement
    if (strip) {
      const thumbnailBounds = thumbnail.getBoundingClientRect()
      const stripBounds = strip.getBoundingClientRect()
      if (thumbnailBounds.left < stripBounds.left) {
        strip.scrollLeft -= stripBounds.left - thumbnailBounds.left
      } else if (thumbnailBounds.right > stripBounds.right) {
        strip.scrollLeft += thumbnailBounds.right - stripBounds.right
      }
    }
    if (focusThumbnail) thumbnail?.focus({ preventScroll: true })
  }
}

function onPreviewError() {
  previewError.value = true
  previewLoaded.value = true
}

function handleArrowKeys(event, focusThumbnail = false) {
  if (zoomed.value && event.target === viewerCanvas.value) return
  const destinations = {
    ArrowLeft: currentIndex.value - 1,
    ArrowRight: currentIndex.value + 1,
    Home: 0,
    End: adsbImages.length - 1,
  }
  if (event.key in destinations) {
    event.preventDefault()
    selectImage(destinations[event.key], focusThumbnail)
  }
}

function openViewer(event) {
  viewerTrigger = event.currentTarget
  fullImageLoaded.value = false
  fullImageError.value = false
  zoomed.value = false
  viewerOpen.value = true
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  viewer.value.showModal()
}

function releaseScrollLock() {
  if (previousOverflow !== null) {
    document.body.style.overflow = previousOverflow
    previousOverflow = null
  }
}

function onViewerClosed() {
  viewerOpen.value = false
  zoomed.value = false
  releaseScrollLock()
  if (viewerTrigger?.isConnected) viewerTrigger.focus({ preventScroll: true })
}

function closeFromBackdrop(event) {
  if (event.target === viewer.value) viewer.value.close()
}

onBeforeUnmount(() => {
  viewer.value?.close()
  releaseScrollLock()
})
</script>

<template>
  <div class="results-gallery">
    <figure class="gallery-frame">
      <div class="gallery-toolbar">
        <span class="gallery-frame-label"
          ><span aria-hidden="true" class="gallery-indicator"></span>Application views</span
        >
        <button
          type="button"
          class="gallery-expand"
          aria-label="Open full-size project image"
          @click="openViewer"
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M7 3H3v4m10-4h4v4M3 13v4h4m10-4v4h-4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span>Full size</span>
        </button>
      </div>
      <button
        id="adsb-featured-view"
        class="gallery-screen"
        type="button"
        :aria-label="`Enlarge ${currentImage.title}`"
        :aria-busy="!previewLoaded"
        @click="openViewer"
      >
        <img
          :key="currentImage.id"
          :src="currentImage.preview"
          :srcset="currentImage.srcset"
          sizes="(min-width: 1024px) 800px, (min-width: 768px) 90vw, 100vw"
          :alt="currentImage.alt"
          :width="currentImage.width"
          :height="currentImage.height"
          loading="lazy"
          decoding="async"
          @load="previewLoaded = true"
          @error="onPreviewError"
        />
        <span v-if="!previewLoaded" class="gallery-image-status">Loading image…</span>
        <span v-if="previewError" class="gallery-image-status"
          >Image unavailable. Try another view.</span
        >
        <span class="gallery-open-hint" aria-hidden="true">Click to explore <span>↗</span></span>
      </button>
      <figcaption class="gallery-caption">
        <p aria-live="polite" aria-atomic="true">
          {{ currentImage.title }}
          <span class="gallery-count">{{ currentIndex + 1 }} / {{ adsbImages.length }}</span>
        </p>
        <div class="gallery-controls">
          <button
            type="button"
            class="gallery-arrow"
            aria-label="Previous project image"
            @click="selectImage(currentIndex - 1)"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            class="gallery-arrow"
            aria-label="Next project image"
            @click="selectImage(currentIndex + 1)"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </figcaption>
    </figure>
    <div
      class="gallery-thumbnails"
      role="group"
      aria-label="Choose a project image"
      @keydown="handleArrowKeys($event, true)"
    >
      <button
        v-for="(image, index) in adsbImages"
        :key="image.id"
        :ref="
          (element) => {
            thumbnails[index] = element
          }
        "
        type="button"
        class="gallery-thumbnail"
        :aria-label="`Show ${image.title}`"
        :aria-pressed="currentIndex === index"
        aria-controls="adsb-featured-view"
        @click="selectImage(index)"
      >
        <img
          :src="image.thumbnail"
          alt=""
          :width="image.width"
          :height="image.height"
          loading="lazy"
          decoding="async"
        />
        <span>{{ image.label }}</span>
      </button>
    </div>
    <Teleport to="body">
      <dialog
        ref="viewer"
        class="results-lightbox"
        aria-labelledby="results-viewer-title"
        @close="onViewerClosed"
        @click="closeFromBackdrop"
        @keydown="handleArrowKeys"
      >
        <div class="lightbox-panel">
          <div class="lightbox-toolbar">
            <div>
              <p class="lightbox-kicker">ADS-B · Project results</p>
              <h2 id="results-viewer-title">{{ currentImage.title }}</h2>
            </div>
            <div class="lightbox-actions">
              <button
                type="button"
                class="button-secondary lightbox-zoom"
                :aria-pressed="zoomed"
                @click="zoomed = !zoomed"
              >
                {{ zoomed ? 'Fit to screen' : 'Actual size' }}</button
              ><button
                type="button"
                class="gallery-arrow lightbox-close"
                aria-label="Close image viewer"
                autofocus
                @click="viewer.close()"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div
            ref="viewerCanvas"
            class="lightbox-canvas"
            :class="{ 'is-zoomed': zoomed }"
            tabindex="0"
            role="region"
            aria-label="Project image; use Actual size to inspect details"
          >
            <template v-if="viewerOpen">
              <img
                v-if="!fullImageLoaded"
                :src="currentImage.preview"
                alt=""
                aria-hidden="true"
                class="lightbox-placeholder"
              />
              <img
                :key="currentImage.id"
                :src="currentImage.original"
                :alt="currentImage.alt"
                :width="currentImage.width"
                :height="currentImage.height"
                class="lightbox-image"
                :class="{ 'is-loading': !fullImageLoaded }"
                decoding="async"
                @load="fullImageLoaded = true"
                @error="fullImageError = true"
              />
            </template>
          </div>
          <div class="lightbox-footer">
            <button
              type="button"
              class="button-secondary"
              aria-label="Previous full-size image"
              @click="selectImage(currentIndex - 1)"
            >
              <span aria-hidden="true">←</span> Previous
            </button>
            <p aria-live="polite" aria-atomic="true">
              <span v-if="fullImageError">Full-size image unavailable</span
              ><span v-else-if="!fullImageLoaded">Loading full-size image…</span
              ><span v-else>{{ currentIndex + 1 }} / {{ adsbImages.length }}</span>
            </p>
            <button
              type="button"
              class="button-secondary"
              aria-label="Next full-size image"
              @click="selectImage(currentIndex + 1)"
            >
              Next <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </dialog>
    </Teleport>
  </div>
</template>

<style scoped>
.results-gallery {
  margin-top: 1.75rem;
  min-width: 0;
}
.gallery-frame {
  border: 1px solid var(--control-border);
  border-radius: 0.875rem;
  overflow: hidden;
  background: var(--surface);
  box-shadow: 0 18px 40px rgb(0 0 0 / 20%);
}
.gallery-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.375rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--surface-raised);
}
.gallery-frame-label {
  display: inline-flex;
  flex: 1 1 8rem;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--muted);
}
.gallery-indicator {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 2px;
  border: 1px solid var(--accent);
}
.gallery-expand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  min-height: 2.75rem;
  padding-inline: 0.5rem;
  border-radius: 0.25rem;
}
.gallery-expand svg {
  width: 1rem;
  height: 1rem;
}
.gallery-expand:hover {
  color: var(--accent-hover);
}
.gallery-screen {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 2 / 1;
  padding: 0;
  border: 0;
  background: var(--surface-inset);
  cursor: zoom-in;
}
.gallery-screen img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.gallery-screen:focus-visible {
  outline-offset: -4px;
}
.gallery-open-hint {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #edf2f8;
  background: rgb(9 15 24 / 94%);
  border: 1px solid #64748b;
  padding: 0.375rem 0.625rem;
  border-radius: 0.375rem;
  opacity: 0;
  transition: opacity 140ms ease;
}
.gallery-screen:hover .gallery-open-hint,
.gallery-screen:focus-visible .gallery-open-hint {
  opacity: 1;
}
.gallery-image-status {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: var(--muted);
  font-size: 0.875rem;
  background: var(--surface-inset);
}
.gallery-caption {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid var(--border);
}
.gallery-caption p {
  flex: 1 1 12rem;
  font-size: 0.9375rem;
  font-weight: 550;
}
.gallery-count {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 0.25rem;
}
.gallery-controls {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}
.gallery-arrow {
  display: inline-grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  border: 1px solid var(--control-border);
  background: var(--surface-raised);
  color: var(--text);
  border-radius: 0.375rem;
  font-size: 1.25rem;
  transition:
    background-color 140ms ease,
    border-color 140ms ease;
}
.gallery-arrow:hover {
  background: var(--accent-soft);
  border-color: var(--accent);
}
.gallery-thumbnails {
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  padding: 0.875rem 0.25rem 0.5rem;
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
  scrollbar-color: var(--control-border) transparent;
}
.gallery-thumbnail {
  flex: 0 0 7.5rem;
  padding: 0.375rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: var(--surface);
  color: var(--muted);
  text-align: left;
  scroll-snap-align: start;
  transition:
    border-color 140ms ease,
    background-color 140ms ease;
}
.gallery-thumbnail img {
  width: 100%;
  height: 3.75rem;
  object-fit: cover;
  border-radius: 0.25rem;
  opacity: 0.65;
  transition: opacity 140ms ease;
}
.gallery-thumbnail span {
  display: block;
  font-size: 0.75rem;
  line-height: 1.4;
  padding: 0.5rem 0.125rem 0.125rem;
}
.gallery-thumbnail[aria-pressed='true'] {
  border-color: var(--accent);
  background: var(--accent-soft);
  color: var(--text);
}
.gallery-thumbnail:hover {
  border-color: var(--control-border);
}
.gallery-thumbnail:hover img,
.gallery-thumbnail[aria-pressed='true'] img {
  opacity: 1;
}
.results-lightbox {
  width: calc(100% - 2rem);
  max-width: 100rem;
  max-height: calc(100dvh - 2rem);
  margin: auto;
  padding: 0;
  color: var(--text);
  border: 1px solid var(--control-border);
  border-radius: 0.875rem;
  background: var(--surface);
  box-shadow: 0 24px 80px rgb(0 0 0 / 40%);
  overflow: auto;
}
.results-lightbox::backdrop {
  background: rgb(4 8 14 / 88%);
  backdrop-filter: blur(5px);
}
.lightbox-panel {
  padding: 1rem;
}
.lightbox-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.lightbox-kicker {
  font-size: 0.75rem;
  color: var(--muted);
  margin-bottom: 0.375rem;
}
.lightbox-toolbar h2 {
  font-size: 1.125rem;
  letter-spacing: -0.015em;
}
.lightbox-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: auto;
}
.lightbox-zoom {
  font-size: 0.8125rem;
}
.lightbox-close {
  font-size: 1.75rem;
}
.lightbox-canvas {
  display: grid;
  place-items: center;
  position: relative;
  min-height: 8rem;
  background: var(--surface-inset);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
}
.lightbox-image {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100dvh - 15rem);
  object-fit: contain;
}
.lightbox-image.is-loading {
  opacity: 0;
}
.lightbox-placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  pointer-events: none;
}
.lightbox-canvas.is-zoomed {
  display: block;
  overflow: auto;
  height: min(65dvh, 54rem);
}
.is-zoomed .lightbox-image {
  max-width: none;
  max-height: none;
}
.lightbox-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.lightbox-footer .button-secondary {
  font-size: 0.8125rem;
  padding-inline: 0.875rem;
}
.lightbox-footer p {
  font-size: 0.75rem;
  color: var(--muted);
  text-align: center;
  flex: 1;
}
@media (min-width: 768px) {
  .gallery-count {
    display: inline;
    margin-left: 0.75rem;
  }
  .gallery-thumbnail {
    flex-basis: calc((100% - 3.125rem) / 6);
    min-width: 6rem;
  }
  .gallery-thumbnails {
    padding-inline: 0;
  }
}
@media (hover: none) {
  .gallery-open-hint {
    opacity: 1;
  }
}
@media (max-width: 399px) {
  .gallery-toolbar,
  .gallery-caption {
    padding-inline: 0.75rem;
  }
  .gallery-caption {
    gap: 0.5rem;
  }
  .gallery-caption p {
    font-size: 0.8125rem;
  }
  .results-lightbox {
    width: calc(100% - 1rem);
    max-height: calc(100dvh - 1rem);
  }
  .lightbox-panel {
    padding: 0.75rem;
  }
  .lightbox-actions {
    margin-left: 0;
    width: 100%;
    justify-content: space-between;
  }
}
</style>
