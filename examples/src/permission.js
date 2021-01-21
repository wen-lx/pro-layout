import router, { resetRouter } from './router'
import store from './store'
import { asyncRoutes } from './router/router.config'
let flag = false

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({path: '/login'});
  } else {
    if (flag) {
      next()
    } else {
      flag = true
      router.addRoutes(asyncRoutes) // 动态添加可访问路由表
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    }
  }
})

router.afterEach(() => {
  // resetRouter()
})
