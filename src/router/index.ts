import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true, namespace: 'dashboard' }, name: 'dashboard' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken')
  if (to.path === '/' && isAuthenticated) {
    next('/dashboard')
  } else if (to.path !== '/' && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router;