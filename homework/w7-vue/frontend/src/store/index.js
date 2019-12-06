import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // designers: [],
    counter: 0
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchDesigners() {
      const result = await axios.get('http://localhost:3000/designer/all/json')
      console.log(result)
    }
  },
  modules: {
  }
})
