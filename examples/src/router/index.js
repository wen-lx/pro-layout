import Vue from 'vue'
import VueRouter from 'vue-router'
import { contantRoutes } from './router.config'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'hash',
  routes: contantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router