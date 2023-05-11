import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import AllRules from '@vee-validate/rules'

import App from './App.vue'
import router from './router'

const app = createApp(App)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 輸入文字時，就立即進行驗證
})
setLocale('zh_TW')
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(createPinia())
app.use(router)

app.mount('#app')
