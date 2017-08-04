import Vue from 'vue'
import Router from 'vue-router'

import Search from 'app/pages/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Search
    }
  ]
})
