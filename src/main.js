import { createApp } from 'vue'
import template from './template'
import router from './router'
import * as components from './components'
import * as layouts from './layouts'
import './scss/global.scss'
import store from './store'

const app = createApp(template)

// register re-usable components
for (let component of Object.entries(components)) {
  app.component(component[1]?.name ?? component[0], components[component[0]])
}

// register layouts
for (let layout of Object.entries(layouts)) {
  app.component(layout[1]?.name ?? layout[0], layouts[layout[0]])
}

app.use(store)
app.use(router)
app.mount('#page')

app.config.performance = process.env.NODE_ENV !== 'production'