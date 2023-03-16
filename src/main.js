import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './assets/styles/reset.css' 
import './assets/styles/style.sass' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import lazyloadImgInit, { LazyloadImg } from 'vue3-lazyload-img'
import router from './scripts/router.js'
import en from './locales/en.json'
import tw from './locales/zh-TW.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'en',
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'zh-TW': tw
  }
})

const app = createApp(App)
app.use(router)
   .use(i18n)
   .use(lazyloadImgInit, { retryLoad: 0 })
   .mount('#app')
