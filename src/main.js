import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './assets/styles/reset.css' 
import './assets/styles/style.sass' 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './scripts/router.js'
import en from './locales/en.json'
import tw from './locales/zh-TW.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'en': en,
    'zh-TW': tw
  }
})

const app = createApp(App)
app.use(router)
   .use(i18n)
   .mount('#app')
