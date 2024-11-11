import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import css from './assets/css/main.css'
import scr from './assets/js/main.js'
import  './assets/vendor/bootstrap/css/bootstrap.css'
import js from './assets/vendor/bootstrap/js/bootstrap.bundle'
import Master from './views/pages/Master.vue'
const app = createApp(App).use(bootstrap, css, scr, img, js, Master)

app.use(router)

app.mount('#app')
