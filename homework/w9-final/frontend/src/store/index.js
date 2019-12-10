import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    designers: [],
    designer: {},
    skills: [],
    skill: []
  },
  mutations: {
    SET_DESIGNERS(state, data) {
      state.designers = data
    },
    SET_DESIGNER(state, data) {
      state.designer = data
    },
    SET_SKILLS(state, data) {
      state.skills = data
    },
    SET_SKILL(state, data) {
      state.skill = data
    }
  },
  actions: {
    async fetchDesigners({ commit }) {
      const result = await axios.get(`http://localhost:3000/designer/all/json`)
      commit('SET_DESIGNERS', result.data)
    },
    async fetchDesigner({ commit }, id) {
      const result = await axios.get(
        `http://localhost:3000/designer/${id}/json`
      )
      commit('SET_DESIGNER', result.data)
    },
    async fetchSkills({ commit }) {
      const result = await axios.get(`http://localhost:3000/skill/all/json`)
      commit('SET_SKILLS', result.data)
    },
    async fetchSkill({ commit }, id) {
      const result = await axios.get(
        `http://localhost:3000/skill/${id}/json`
      )
      commit('SET_SKILL', result.data)
    }
  },
  modules: {}
})
