import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Designer from '../views/Designer.vue'
import Skill from '../views/Skill.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/designer/:id',
    name: 'designer',
    component: Designer
  },
  {
    path: '/skill/:id',
    name: 'skill',
    component: Skill
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
