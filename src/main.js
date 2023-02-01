import { createApp } from 'vue'
import './assets/styles/reset.css' 
import './assets/styles/style.sass' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import App from './App.vue'
import lazyloadImgInit, { LazyloadImg } from 'vue3-lazyload-img'

const app = createApp(App)
app.use(lazyloadImgInit, { retryLoad: 0 })
   .mount('#app')
