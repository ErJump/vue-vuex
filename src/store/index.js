import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    color: 'red',
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    decrementCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    incrementCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    setColor(state, color) {
      state.color = color
    }
  },
  actions: {
    incrementCounter({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('incrementCounter', response.data)
      })
    },
    decrementCounter({ commit }) {
      axios.get('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
        .then(response => {
          commit('decrementCounter', response.data)
      })
    }
  },
  modules: {
  }
})
