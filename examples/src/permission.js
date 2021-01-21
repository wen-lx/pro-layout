import router, { resetRouter } from './router'
import store from './store'
import { asyncRoutes } from './router/router.config'

router.beforeEach((to, from, next) => {
  // console.log(router)
  // if (to.fullPath === '/login') {
  //   try {
  //     // resetRouter()
  //     console.log(to.fullPath)
  //     router.addRoutes(asyncRoutes)
  //   } catch {
  //     console.log('error')
  //   }
  // }
  next()
})

router.addRoutes(asyncRoutes)
// resetRouter()

router.afterEach(() => {
  // resetRouter()
})
