// import { createRouter, createWebHistory } from 'vue-router'
import * as BaseRouter from 'vue-router'

let createRouter = BaseRouter.createRouter
let createWebHistory = BaseRouter.createWebHistory

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

console.log('router', BaseRouter)
window.BaseRouter = BaseRouter
export default router
// export { BaseRouter }