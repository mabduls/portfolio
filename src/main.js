import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/shared/styles/main.css'
import { env } from '@/shared/config/env'

void env

const app = createApp(App)

app.use(router)

app.mount('#app')
