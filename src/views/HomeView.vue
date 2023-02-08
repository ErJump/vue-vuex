<template>
  <div class="home container-lg py-5">
    <div class="row">
      <div class="col-12 text-center mb-2">
        <h1 class="mb-4">VueX Counter</h1>
        <p>Click the buttons to increment and decrement the counter.</p>
        <h2 class="ms_counter mb-4" :style="{color: $store.state.color}">
          {{ $store.state.counter }}
        </h2>
        <button class="btn btn-danger me-4" @click="$store.dispatch('decrementCounter')">-</button>
        <button class="btn btn-primary" @click="$store.dispatch('incrementCounter')">+</button>
      </div>
      <div class="col-12 d-flex align-items-center justify-content-center mb-5">
        <label for="color" class="me-2">Choose your color here</label>
        <input type="color" v-model="color">
      </div>
      <div class="col-12 text-center">
        <h2 class="mb-4">Squared Counter</h2>
        <p>{{ $store.state.counter }}<sup>2</sup> = {{ $store.getters.counterSquared }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  computed: {
    color: {
      get() {
        return this.$store.state.color
      },
      set(value) {
        this.$store.commit('setColor', value)
      }
    }
  }
}
</script>
