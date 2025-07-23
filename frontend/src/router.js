import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: () => import('@/pages/Landing.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/pages/Profile.vue'),
  },
  {
    path: '/mainApp',
    name: 'MainApp',
    component: () => import('@/App.vue'),
  }
]
console.log("app router mounted")


let router = createRouter({
  history: createWebHistory('/frontend'),
  routes,
})

export default router
