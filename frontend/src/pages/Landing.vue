<template>
  <div class="max-w-3xl py-12 mx-auto">
    
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Welcome to Base App</h1>
    
    <Counter />
    
    <div class="mt-8">
      <frappeUI.Button
        icon-left="code"
        @click="handleClick"
        :loading="ping"
      >
        Click to send 'ping' request
      </frappeUI.Button>
      <div class="mt-2">
        {{ ping }}
      </div>
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { ref } from 'vue'
let frappeUI = window.frappeUI
const ping = ref('')

const handleClick = () => {
  ping.value = 'ping'
}

</script>
