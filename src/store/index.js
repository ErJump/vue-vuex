import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  getters: {

  },
  mutations: {
    decrementCounter(state) {
      state.counter--
    },
    incrementCounter(state) {
      state.counter++
    }

  },
  actions: {
  },
  modules: {
  }
})
