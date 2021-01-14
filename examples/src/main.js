import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ProLayout, { SettingDrawer } from '@element-ui-vue/pro-layout'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.component('pro-layout', ProLayout)
Vue.component('setting-drawer', SettingDrawer)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
