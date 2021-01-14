import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.config'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router