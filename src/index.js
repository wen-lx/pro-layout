// export { default } from './BasicLayout.vue'
// export { default as SettingDrawer } from './components/SettingDrawer'
// export { default as SiderMenu } from './components/SiderMenu'
// export default BasicLayout
import { Loading } from 'element-ui'
import BasicLayout from './BasicLayout.vue'
// export default (Vue) => {
//   Vue.component('pro-layout', BasicLayout)
// }
export default {
  version: '0.1.4',
  locale: 'zh',
  install (Vue, options = {}) {
    Vue.component('pro-layout', BasicLayout)
    // components.forEach(component => {
    //   Vue.component(component.name, component)
    // })
    Vue.prototype.loading = Loading
  }
}