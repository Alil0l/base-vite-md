<template>
  <div>
    <header class="bg-gray-100 border-b">
      <div class="max-w-3xl mx-auto px-4 py-4">
        <h1 class="text-xl font-bold text-gray-800">Base App</h1>
      </div>
    </header>
    <nav class="mb-8">
    <div class="flex gap-4">
      <router-link to="/" class="text-blue-600 hover:text-blue-800">Landing</router-link>
      <router-link to="/appPage" class="text-blue-600 hover:text-blue-800">App Page</router-link>
      <a href="/landing" class="text-blue-600 hover:text-blue-800" @click.prevent="()=>handleClick()">Landing</a>
    </div>
  </nav>
  <!-- {{ counter.count }} -->
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
// check if the window has the useCounterStore function
// const counter = window.useCounterStore ? window.useCounterStore() : useCounterStore()
const router = useRouter()
console.log('router', router)
function handleClick() {
  console.log('clicked')
  router.push('/landing')
  console.log('should be routing')
}
</script>