import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入 axios、vue-axios 套件 
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//引入 bootstrap、scss 樣式
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/all.scss'

//引入 vee-validate 套件
import { defineRule, configure } from 'vee-validate';
import { required } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';


const app = createApp(App)

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
