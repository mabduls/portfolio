const allowedEnvironments = new Set(['development', 'staging', 'production', 'test'])

export function readEnvironment(source = {}) {
  const appEnv = source.VITE_APP_ENV || (source.MODE === 'test' ? 'test' : '')

  if (!appEnv) {
    throw new Error('Missing required environment variable: VITE_APP_ENV')
  }

  if (!allowedEnvironments.has(appEnv)) {
    throw new Error(`Unsupported VITE_APP_ENV value: ${appEnv}`)
  }

  return Object.freeze({
    appEnv,
    siteUrl: source.VITE_SITE_URL || null,
  })
}

export const env = readEnvironment(import.meta.env)
