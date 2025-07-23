<template>
  <div class="max-w-3xl py-12 mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Profile</h1>
    <h2 class="text-lg font-medium mb-2 text-gray-800">Name: <span class="text-gray-600">{{ name }}</span></h2>
    <h2 class="text-lg font-medium mb-2 text-gray-800">Email: <span class="text-gray-600">{{ email }}</span></h2>
    <h2 class="text-lg font-medium mb-2 text-gray-800">Phone: <span class="text-gray-600">{{ phone }}</span></h2>
    <h2 class="text-lg font-medium mb-2 text-gray-800">Address: <span class="text-gray-600">{{ address }}</span></h2>
    <h2 class="text-lg font-medium mb-2 text-gray-800">City: <span class="text-gray-600">{{ city }}</span></h2>
    <h2 class="text-lg font-medium mb-2 text-gray-800">State: <span class="text-gray-600">{{ state }}</span></h2>
    <h2 class="text-lg font-medium mb-2 text-gray-800">Zip: <span class="text-gray-600">{{ zip }}</span></h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('John Doe')
const email = ref('john.doe@example.com')
const phone = ref('123-456-7890')
const address = ref('123 Main St')
const city = ref('Anytown')
const state = ref('CA')
const zip = ref('12345')
</script>
