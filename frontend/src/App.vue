<template>
  <div>
    <header class="bg-gray-100 border-b">
      <div class="max-w-3xl mx-auto px-4 py-4">
        <h1 class="text-xl font-bold text-gray-800">Base App</h1>
      </div>
    </header>
    <nav class="mb-8">
    <div class="flex gap-4">
      <BaseRouter.RouterLink to="/" class="text-blue-600 hover:text-blue-800">Landing</BaseRouter.RouterLink>
      <BaseRouter.RouterLink to="/appPage" class="text-blue-600 hover:text-blue-800">App Page</BaseRouter.RouterLink>
      <a href="/landing" class="text-blue-600 hover:text-blue-800" @click.prevent="()=>handleClick()">Landing</a>
      <a href="/landing" class="text-blue-600 hover:text-blue-800" @click.prevent="()=>{console.log('clicked'); router.push('/landing')}">Landing</a>
    </div>
  </nav>
  <!-- {{ counter.count }} -->
    <BaseRouter.RouterView />
  </div>
</template>

<script setup>
// import { useRouter } from 'vue-router'
const BaseRouter = window.BaseRouter
import { useCounterStore } from '@/stores/counter'
// check if the window has the useCounterStore function
// const counter = window.useCounterStore ? window.useCounterStore() : useCounterStore()
const router = BaseRouter.useRouter()
console.log('router', BaseRouter)
console.log('router', BaseRouter.useRouter)
console.log('router', router)
function handleClick() {
  console.log('clicked')
  router.push('/landing')
  console.log('should be routing')
}
</script>