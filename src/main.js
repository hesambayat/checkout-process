import { createApp } from 'vue'
import template from './template'
import router from './router'
import './styles'

const app = createApp(template)

app.use(router)
app.mount('#app')
