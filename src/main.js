import { createApp } from 'vue'
import template from './template'
import router from './router'
import * as components from './components'
import './scss/reset.scss'

const app = createApp(template)

for (let component of Object.entries(components)) {
  app.component(component[1]?.name ?? component[0], components[component[0]])
}

app.use(router)
app.mount('#app')
