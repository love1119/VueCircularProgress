import Vue from 'vue'
import Router from 'vue-router'
import Tutorial from './views/Tutorial.vue'
import WellnessPlan from './views/WellnessPlan.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/plan'
    },
    {
      path: '/plan',
      component: WellnessPlan
    },
    {
      path: '/example',
      component: Tutorial
    },
  ]
})
