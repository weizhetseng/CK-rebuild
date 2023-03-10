import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//引入 axios、vue-axios 套件 
import axios from 'axios'
import VueAxios from 'vue-axios'

//引入 bootstrap、scss 樣式
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/all.scss'

//引入 vee-validate 套件
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min, regex, confirmed } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('regex', regex);
defineRule('confirmed', confirmed);

configure({
    // 載入繁體中文語系
    generateMessage: localize({ zh_TW: zhTW }),
    // 當輸入任何內容直接進行驗證
    validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App)

// 註冊 vee-validate 三個全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
router.isReady().then(() => app.mount('#app'))


