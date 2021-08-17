import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/expansiones',
    name: 'Series',
    component: () => import(/* webpackChunkName: "series" */ '../views/Series.vue')
  },
  {
    path: '/expansiones/:set',
    name: 'Sets',
    component: () => import(/* webpackChunkName: "sets" */ '../views/Sets.vue')
  },
  {
    path: '/cartas/:set',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },

  /**** ADMIN ****/
  {
    path: '/login-admin',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
