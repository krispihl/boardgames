import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Games from './views/Games.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    },
    {
      path: '/allgames',
      name: 'games',
      component: Games
    }
  ]
})
