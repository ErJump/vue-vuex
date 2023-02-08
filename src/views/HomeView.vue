<template>
  <div class="home container-lg py-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="mb-4">VueX Counter</h1>
        <p>Click the buttons to increment and decrement the counter.</p>
        <h2 class="ms_counter mb-4">
          {{ counter }}
        </h2>
        <button class="btn btn-danger me-4" @click="decrement()">-</button>
        <button class="btn btn-primary" @click="increment()">+</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
}
</script>
