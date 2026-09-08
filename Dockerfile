# 1. Gunakan Base Image Node.js resmi versi Alpine yang ringan
FROM node:22-alpine

# 2. Tentukan folder kerja di dalam kontainer
WORKDIR /app

# 3. Copy file dependensi proyek
COPY package*.json ./

# 4. Install semua paket JS (Fastify, Vue, Vite, dll)
RUN npm install

# 5. Copy seluruh sisa kodingan proyek ke dalam kontainer
COPY . .

# 6. Build aplikasi Vue.js untuk menghasilkan folder 'dist'
RUN npm run build

# 7. Buka Port 3000 di dalam kontainer
EXPOSE 3000

# 8. Jalankan server Fastify staging
CMD ["npm", "run", "server:staging"]