// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Tes pages
import LoginView from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import DashboardView from '@/views/DashboardView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
