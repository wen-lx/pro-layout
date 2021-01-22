import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({path: '/login'});
  } else {
    if (store.getters.asyncRoutes.length) {
      next()
    } else {
      store.dispatch('generateRoutes', 'admin')
      router.addRoutes(store.state.asyncRoutes) // 动态添加可访问路由表
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
    }
  }
})

router.afterEach(() => {
  // resetRouter()
})
