<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Counter from Base Code</h2>
    <div class="text-4xl font-bold text-center mb-6 text-blue-600">
      {{ counter.count }}
    </div>
    <div class="flex gap-2 justify-center">
      <Button @click="decrement" variant="outline">
        -
      </Button>
      <Button @click="reset" variant="outline">
        Reset the Base App Counter
      </Button>
      <Button @click="increment" variant="outline">
        +
      </Button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'
const counter = window.useCounterStore ? window.useCounterStore() : useCounterStore()


const decrement = () => {
  console.log('decrement');
  counter.decrement()
  console.log(counter.count)
}

const increment = () => {
  console.log('increment');
  counter.increment()
  console.log(counter.count)
}

const reset = () => {
  console.log('reset');
  counter.reset()
  console.log(counter.count)
}
</script> 