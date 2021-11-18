import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/Info')
  },
  {
    path: '/consent',
    name: 'Consent',
    component: () => import('@/views/Consent')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/Account')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
