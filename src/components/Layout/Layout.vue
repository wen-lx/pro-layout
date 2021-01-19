<template>
  <div class="container" :style="{display: settings.layout === 'sidemenu' ? 'flex' : 'block'}">
    <SiderMenu v-if="settings.layout === 'sidemenu'" :themeColor="settings.themeColor" :logo="slots.logo[0]"></SiderMenu>
    <TopMenu v-if="settings.layout === 'topmenu'" :themeColor="settings.themeColor" :left="slots.left[0]" :right="slots.right[0]" :logo="slots.logo[0]"></TopMenu>
    <div style="overflow: auto;height: 100%;marginTop: 64px;flex: 1">
      <div v-if="settings.layout === 'sidemenu'" style="height: 64px;backgroundColor: #fff;border-bottom: 1px solid #eee;position: fixed;width: 100%;top: 0;box-shadow: 1px 0 4px rgba(0, 21, 41, 0.1)">
        <div style="margin-left: 10px"><slot name="left"></slot></div>
        <div style="position: fixed;right: 10px;top: 0px"><slot name="right"></slot></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SiderMenu from '../SiderMenu'
import TopMenu from '../TopMenu'
export default {
  inject: ['menus', 'slots', 'settings'],
  components: {
    SiderMenu,
    TopMenu
  },
  data() {
    return {
      drawer: false,
      colorList: [
        {value: '#1890ff', label: 'daybreak'},
        {value: '#F5222D', label: 'dust'},
        {value: '#FA541C', label: 'volcano'},
        {value: '#FAAD14', label: 'sunset'},
        {value: '#13C2C2', label: 'cyan'},
        {value: '#52C41A', label: 'green'},
        {value: '#2F54EB', label: 'geekblue'},
        {value: '#722ED1', label: 'purple'},
      ]
    }
  },
  watch: {
    '$route' () {
      this.$slots.left = this.slots.left[0]
      this.$slots.right = this.slots.right[0]
    }
  },
  created () {
    this.$slots.left = this.slots.left[0]
    this.$slots.right = this.slots.right[0]
    console.log(111111, this.$slots.left)
  },
  mounted () {
  },
  methods: {
    changeThemeColor (color) {
    },
    changeNavMode (mode) {
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  overflow hidden
</style>
