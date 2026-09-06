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

test('every portfolio route renders without console errors', async ({ page }) => {
  const errors = []
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text())
  })
  for (const route of routes) {
    await page.goto(route)
    await expect(page.locator('h1')).toBeVisible()
  }
  expect(errors).toEqual([])
})

test('project filters and simulations remain interactive', async ({ page }) => {
  await page.goto('/projects')
  await page.getByRole('button', { name: 'Real-Time Systems' }).click()
  await expect(page.getByText('1 project')).toBeVisible()
  await page.goto('/projects/ads-b-platform')
  await page.getByRole('button', { name: 'Pause' }).click()
  await page.getByRole('button', { name: 'Select DEMO 204' }).click()
  await expect(page.getByText('31,000 ft')).toBeVisible()
  await page.getByRole('button', { name: 'Simulate primary failure' }).click()
  await expect(page.getByText(/Backup source is serving/)).toBeVisible()
})

test('home has no automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(results.violations).toEqual([])
})

test('unknown routes show an accessible recovery action', async ({ page }) => {
  await page.goto('/does-not-exist')
  await expect(page.getByRole('heading', { name: 'This route left the radar.' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Return home' })).toBeVisible()
})
