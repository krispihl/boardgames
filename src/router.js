import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Games from './views/Games.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'games',
      component: Games
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
