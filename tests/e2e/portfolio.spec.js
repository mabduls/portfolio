import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = [
  '/',
  '/projects',
  '/projects/ads-b-platform',
  '/projects/monitoring-platform',
  '/projects/reinsurance-platform',
  '/projects/hyang-platform',
  '/projects/coding-camp',
  '/projects/bem-feb',
  '/projects/csirt-internship',
  '/about',
]
const primaryRoutes = routes.slice(0, 6)
const accessibilityRoutes = [...primaryRoutes, '/about']

async function expectNoOverflow(page) {
  const report = await page.evaluate(() => ({
    fits: document.documentElement.scrollWidth <= window.innerWidth,
    viewport: window.innerWidth,
    pageWidth: document.documentElement.scrollWidth,
    overflow: [...document.querySelectorAll('body *')]
      .filter(
        (element) =>
          element.getBoundingClientRect().right > window.innerWidth + 1 ||
          element.scrollWidth > element.clientWidth + 1,
      )
      .slice(0, 5)
      .map((element) => ({
        tag: element.tagName,
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth,
        right: element.getBoundingClientRect().right,
        class: element.className.baseVal || element.className,
      })),
  }))
  expect(report.fits, JSON.stringify(report)).toBe(true)
}

test('every route loads directly with one main heading and no console errors', async ({ page }) => {
  const errors = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', (error) => errors.push(error.message))
  for (const route of routes) {
    await page.goto(route)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toBeVisible()
    await expectNoOverflow(page)
  }
  expect(errors).toEqual([])
})

test('filters, project navigation, details, and browser history work', async ({ page }) => {
  await page.goto('/projects')
  await page.getByRole('button', { name: 'Aircraft Tracking', exact: true }).click()
  await expect(page.getByText('1 project', { exact: true })).toBeVisible()
  await page
    .getByRole('link', { name: 'Read case study: ADS-B Aircraft Tracking Platform' })
    .click()
  await expect(
    page.getByRole('heading', { name: 'ADS-B Aircraft Tracking Platform', exact: true }),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Project overview', exact: true })).toBeVisible()
  await page.getByText('Implementation details & limitations', { exact: true }).click()
  await expect(page.getByText(/Backup aggregation is not wired/)).toBeVisible()
  await expect(page.getByRole('button', { name: 'Simulate primary failure' })).toHaveCount(0)
  await page.goBack()
  await expect(
    page.getByRole('heading', { name: 'Applications with a clear purpose.' }),
  ).toBeVisible()
  await page.getByRole('button', { name: 'Data Platforms', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(1)
  await page.getByRole('button', { name: 'Reset filters', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(7)
})

test('navigation, contact anchors, and mobile menu focus remain usable', async ({ page }) => {
  await page.goto('/')
  const menu = page.locator('.menu-toggle')
  if (await menu.isVisible()) {
    await menu.click()
    await expect(menu).toHaveAttribute('aria-expanded', 'true')
    await page.keyboard.press('Escape')
    await expect(menu).toHaveAttribute('aria-expanded', 'false')
    await expect(menu).toBeFocused()
    await menu.click()
  }
  await page
    .getByRole('navigation', { name: 'Primary navigation' })
    .getByRole('link', { name: 'About', exact: true })
    .click()
  await expect(page.getByRole('heading', { name: 'Hi, I’m Abdul.' })).toBeVisible()
  const aboutMenu = page.locator('.menu-toggle')
  if (await aboutMenu.isVisible()) {
    await expect(aboutMenu).toHaveAttribute('aria-expanded', 'false')
    await aboutMenu.click()
  }
  await page
    .getByRole('navigation', { name: 'Primary navigation' })
    .getByRole('link', { name: 'Contact', exact: true })
    .click()
  await expect(page).toHaveURL(/\/#contact$/)
  await expect(page.locator('#contact')).toBeFocused()
  await expect(page.locator('#contact a[href="mailto:abdabdulziza@gmail.com"]')).toBeVisible()
  await expect(
    page.locator('#contact a[href="https://www.linkedin.com/in/muhammad-abdul-aziz-889a212ba/"]'),
  ).toBeVisible()
  await expect(page.getByRole('link', { name: /resume/i })).toHaveCount(0)
  await expectNoOverflow(page)
})

test('case study contents navigate to visible sections and preserve keyboard focus', async ({
  page,
}) => {
  await page.goto('/projects/hyang-platform')
  const disclosure = page.locator('.contents details')
  if (await disclosure.isVisible()) await disclosure.locator('summary').click()
  const contents = page.locator('nav[aria-label="Case study contents"]:visible')
  await contents.getByRole('link', { name: 'Main features', exact: true }).click()
  await expect(page).toHaveURL(/#features$/)
  await expect(page.locator('#features')).toBeFocused()
  await expect(page.getByRole('heading', { name: 'Main features', exact: true })).toBeVisible()
})

for (const route of accessibilityRoutes) {
  test(`accessibility: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(route)
    const disclosure = page.locator('.notes-disclosure')
    if (await disclosure.count()) await disclosure.locator('summary').click()
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })
}

test('all routes reflow at 320 CSS pixels', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 })
  for (const route of routes) {
    await page.goto(route)
    await expect(page.locator('h1')).toBeVisible()
    await expectNoOverflow(page)
  }
})

test('primary pages fit phone, tablet, desktop, wide, and landscape layouts', async ({ page }) => {
  const sizes = [
    [375, 667],
    [390, 844],
    [639, 960],
    [640, 960],
    [767, 1024],
    [768, 1024],
    [1023, 768],
    [1024, 768],
    [1280, 720],
    [1440, 900],
    [1920, 1080],
    [2560, 1440],
    [844, 390],
  ]
  for (const [width, height] of sizes) {
    await page.setViewportSize({ width, height })
    for (const route of primaryRoutes) {
      await page.goto(route)
      await expect(page.locator('h1')).toBeVisible()
      await expectNoOverflow(page)
      expect(
        await page
          .locator('.container')
          .first()
          .evaluate((element) => element.getBoundingClientRect().width),
      ).toBeLessThanOrEqual(1216)
    }
  }
})

test('200 percent text enlargement preserves page reflow', async ({ page }) => {
  for (const width of [390, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of [
      '/',
      '/projects',
      '/projects/monitoring-platform',
      '/projects/ads-b-platform',
    ]) {
      await page.goto(route)
      await page.evaluate(() => {
        document.documentElement.style.fontSize = '200%'
      })
      await expect(page.locator('h1')).toBeVisible()
      await expectNoOverflow(page)
    }
  }
})

test('high-density phone screens keep primary pages usable', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  })
  const page = await context.newPage()
  try {
    for (const route of primaryRoutes) {
      await page.goto(`http://127.0.0.1:4173${route}`)
      await expect(page.locator('h1')).toBeVisible()
      await expectNoOverflow(page)
    }
  } finally {
    await context.close()
  }
})

test('ADS-B results show all supplied views with thumbnail and keyboard navigation', async ({
  page,
}) => {
  const originalImageRequests = []
  page.on('request', (request) => {
    if (request.resourceType() === 'image' && /adsb-photo\d.*\.png/.test(request.url()))
      originalImageRequests.push(request.url())
  })
  await page.goto('/projects/ads-b-platform#results')
  await expect(page.getByRole('heading', { name: 'Project results', exact: true })).toBeVisible()
  const thumbnails = page.getByRole('group', { name: 'Choose a project image' })
  await expect(thumbnails.getByRole('button')).toHaveCount(7)
  for (const [index, name] of [
    'Aircraft map overview',
    '3D aircraft tracking',
    'Helicopter tracking view',
    'Cockpit view',
    'Operational reports',
    'Flight details & history',
    'Flight route playback',
  ].entries()) {
    await thumbnails.getByRole('button', { name: `Show ${name}`, exact: true }).click()
    await expect(page.locator('.gallery-caption')).toContainText(name)
    await expect(page.locator('.gallery-count')).toHaveText(`${index + 1} / 7`)
    await expect
      .poll(() =>
        page
          .locator('.gallery-screen img')
          .evaluate((image) => image.complete && image.naturalWidth > 0),
      )
      .toBe(true)
  }
  expect(originalImageRequests).toEqual([])
  await thumbnails
    .getByRole('button', { name: 'Show Flight route playback', exact: true })
    .press('Home')
  await expect(
    thumbnails.getByRole('button', { name: 'Show Aircraft map overview', exact: true }),
  ).toBeFocused()
  await page.getByRole('button', { name: 'Previous project image', exact: true }).click()
  await expect(page.locator('.gallery-count')).toHaveText('7 / 7')
  const scrollBefore = await page.evaluate(() => window.scrollY)
  await page.getByRole('button', { name: 'Next project image', exact: true }).click()
  await expect(page.locator('.gallery-count')).toHaveText('1 / 7')
  expect(await page.evaluate(() => window.scrollY)).toBeCloseTo(scrollBefore, 0)
  await expectNoOverflow(page)
})

test('ADS-B image viewer supports full-size inspection, focus recovery, and route cleanup', async ({
  page,
}) => {
  await page.goto('/projects')
  await page
    .getByRole('link', { name: 'Read case study: ADS-B Aircraft Tracking Platform', exact: true })
    .click()
  const opener = page.getByRole('button', { name: 'Open full-size project image', exact: true })
  await opener.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(page.getByRole('button', { name: 'Close image viewer', exact: true })).toBeFocused()
  await expect
    .poll(() =>
      dialog
        .locator('.lightbox-image')
        .evaluate((image) => image.complete && image.naturalWidth > 0),
    )
    .toBe(true)
  const accessibility = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  expect(accessibility.violations).toEqual([])
  await page.keyboard.press('ArrowRight')
  await expect(
    dialog.getByRole('heading', { name: '3D aircraft tracking', exact: true }),
  ).toBeVisible()
  await page.getByRole('button', { name: 'Actual size', exact: true }).click()
  await expect(page.locator('.lightbox-canvas')).toHaveClass(/is-zoomed/)
  await expect(page.getByRole('button', { name: 'Fit to screen', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(opener).toBeFocused()
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  await opener.click()
  await page.goBack()
  await expect(
    page.getByRole('heading', { name: 'Applications with a clear purpose.' }),
  ).toBeVisible()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
})

test('unknown routes provide clear recovery links', async ({ page }) => {
  await page.goto('/does-not-exist')
  await expect(page.getByRole('heading', { name: 'Page not found', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Return home', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Browse projects', exact: true })).toBeVisible()
})
