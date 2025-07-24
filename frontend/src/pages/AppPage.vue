<template>
  <div class="max-w-3xl py-12 mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">About Page</h1>
    <p class="text-gray-600 mb-6">
      This is a simple about page with a button component.
    </p>
    <frappeUI.Button @click="handleClick" variant="primary">
      Click Me!
    </frappeUI.Button>
    <p v-if="clicked" class="mt-4 text-green-600">
      Button was clicked!
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let frappeUI = window.frappeUI
console.log('frappeUI', frappeUI)
const clicked = ref(false)
function handleClick() {
  clicked.value = true
  setTimeout(() => {
    clicked.value = false
  }, 2000)
}
</script> 