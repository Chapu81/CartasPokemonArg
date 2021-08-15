import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/expansiones',
    name: 'Series',
    component: () => import(/* webpackChunkName: "series" */ '../views/Series.vue')
  },
  {
    path: '/expansiones/:id',
    name: 'Sets',
    component: () => import(/* webpackChunkName: "sets" */ '../views/Sets.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
