import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    // route level code-splitting and lazy-loadeding
    component: () => import(/* webpackChunkName: "create" */ '../views/Edition')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    // route level code-splitting and lazy-loadeding
    component: () =>
      import(/* webpackChunkName: "edition" */ '../views/Edition')
  },
  {
    path: '/task/:taskId',
    name: 'task',
    // Cast id to a number
    props(route: any) {
      const props = { ...route.params }
      props.taskId = +props.taskId
      return props
    },
    // route level code-splitting and lazy-loadeding
    component: () => import(/* webpackChunkName: "task" */ '../views/Task')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
