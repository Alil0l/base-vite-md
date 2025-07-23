<template>
  <div class="max-w-3xl py-12 mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">About Page</h1>
    <p class="text-gray-600 mb-6">
      This is a simple about page with a button component.
    </p>
    <Button @click="handleClick" variant="primary">
      Click Me!
    </Button>
    <p v-if="clicked" class="mt-4 text-green-600">
      Button was clicked!
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    handleClick() {
      this.clicked = true
      setTimeout(() => {
        this.clicked = false
      }, 2000)
    }
  }
}
</script> 