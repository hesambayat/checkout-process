import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
