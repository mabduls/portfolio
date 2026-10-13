import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Fastify from 'fastify'
import fastifyStatic from '@fastify/static'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const PORT = Number(process.env.PORT || 3000)
const ENV = process.env.NODE_ENV || 'staging'
const fastify = Fastify({ logger: true })

// 1. Registrasikan plugin @fastify/static untuk melayani folder 'dist'
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'dist'),
  prefix: '/', // Menyajikan file statis dari root URL
})

// 2. Handle SPA Routing (seperti Vue Router):
// Jika rute tidak ditemukan, kirimkan index.html agar tidak 404 saat di-refresh
fastify.setNotFoundHandler((req, reply) => {
  reply.sendFile('index.html')
})

// 3. Jalankan server Fastify
const start = async () => {
  try {
    // Note: host '0.0.0.0' Wajib di dalam Docker agar server bisa diakses dari luar kontainer
    await fastify.listen({ port: PORT, host: '0.0.0.0' })
    console.log(`[${ENV.toUpperCase()}] Server Vue.js (Fastify) berjalan di port ${PORT}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
