// export { default } from './BasicLayout.vue'
// export { default as SettingDrawer } from './components/SettingDrawer'
// export { default as SiderMenu } from './components/SiderMenu'
// export default BasicLayout
import BasicLayout from './BasicLayout.vue'
export default (Vue) => {
  Vue.component('pro-layout', BasicLayout)
}