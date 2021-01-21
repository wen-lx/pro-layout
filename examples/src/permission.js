import router, { resetRouter } from './router'
import store from './store'
import { asyncRoutes } from './router/router.config'

router.beforeEach((to, from, next) => {
  if (!router.resolve({name: 'exception'}).route.matched.length) {
    try {
      // resetRouter()
      router.addRoutes(asyncRoutes)
      next()
    } catch {
      console.log('error')
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  // resetRouter()
})
