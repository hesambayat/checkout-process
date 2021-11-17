import { createApp } from 'vue'
import template from './template'
import router from './router'
import './scss/reset.scss'

const app = createApp(template)

app.use(router)
app.mount('#app')
