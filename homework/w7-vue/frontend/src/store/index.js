import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    designers: [],
    counter: 0
  },
  mutations: {
    SET_COUNTER(state, newCount) {
      state.counter = newCount
    },
    SET_DESIGNERS(state, data) {
      state.designers = data
    }
  },
  actions: {
    incrementCounter({ commit, state }) {
      const newCount = state.counter + 1
      commit('SET_COUNTER', newCount)
    },
    async fetchDesigners({ commit }) {
      const result = await axios.get('http://localhost:3000/designer/all/json')
      commit('SET_DESIGNERS', result.data)
    }
  },
  modules: {}
})
 