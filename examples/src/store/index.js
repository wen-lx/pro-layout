import Vue from 'vue'
import Vuex from 'vuex'
import { asyncRoutes } from '@/router/router.config'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules,
  // getters,
  state: {
    asyncRoutes: []
  },
  mutations: {
    ASYNC_ROUTES: (state) => {
      state.asyncRoutes = asyncRoutes
    }
  },
  actions: {
    GenerateRoutes ({state}, role) {
      setTimeout(function() {
        state.asyncRoutes = asyncRoutes
      }, 500)
    }
  }
})

export default store