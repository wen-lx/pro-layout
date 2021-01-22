import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { asyncRoutes } from '@/router/router.config'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules,
  getters,
  state: {
    asyncRoutes: []
  },
  mutations: {
    ASYNC_ROUTES: (state) => {
      state.asyncRoutes = asyncRoutes
    }
  },
  actions: {
    generateRoutes ({commit}, role) {
      if (role === 'admin') {
        commit('ASYNC_ROUTES')
      }
    }
  }
})

export default store