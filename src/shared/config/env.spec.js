import { describe, expect, it } from 'vitest'
import { readEnvironment } from './env'

describe('readEnvironment', () => {
  it('returns validated public configuration', () => {
    expect(
      readEnvironment({ VITE_APP_ENV: 'staging', VITE_SITE_URL: 'https://example.com' }),
    ).toEqual({ appEnv: 'staging', siteUrl: 'https://example.com' })
  })

  it('throws a controlled error when the required value is missing', () => {
    expect(() => readEnvironment({})).toThrow('Missing required environment variable')
  })

  it('rejects unsupported values', () => {
    expect(() => readEnvironment({ VITE_APP_ENV: 'preview' })).toThrow('Unsupported VITE_APP_ENV')
  })
})
