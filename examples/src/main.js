import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ProLayout from '@element-ui-vue/pro-layout'
import ElementUI from 'element-ui'
import './permission'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ProLayout)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
