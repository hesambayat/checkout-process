import { createApp } from 'vue'
import template from './template'
import router from './router'
import * as components from './components'
import './scss/global.scss'
import store from './store'

const app = createApp(template)

for (let component of Object.entries(components)) {
  app.component(component[1]?.name ?? component[0], components[component[0]])
}

app.use(store)
app.use(router)
app.mount('#app')

app.config.performance = process.env.NODE_ENV !== 'production'