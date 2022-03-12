import Vue from 'vue'
import Router from 'vue-router'
import Tutorial from './views/Tutorial.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Tutorial
    },
  ]
})
