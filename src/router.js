import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/HelloWorld'
import Ditail from './components/Ditail'
import Susume from './components/Susume'
import Link from './components/Link'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/detail',
        name: 'detail',
        component: Ditail
    },
    {
      path: '/susume',
      name: 'susume',
      component: Susume
    },
    {
      path: '/link',
      name: 'link',
      component: Link
    },
  ]
})