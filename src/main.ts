import '/src/assets/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt: await import('@/locales/pt.json'),
    en: await import('@/locales/en.json')
  }
})

app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')