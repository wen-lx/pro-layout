<template>
  <div class="left-menu">
    <el-drawer class="left-drawer"
      :visible.sync="drawer"
      direction="ltr">
      <el-menu :default-active="$route.path" unique-opened router
      :background-color="settings.primaryColor" text-color="#ccc" class="sideDrawer">
        <div class="logo"><slot name="logo"></slot></div>
        <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.path">
          <template slot="title">
            <i :class="menu.meta.iconClass"></i>
            <span slot="title">{{menu.meta.title}}</span>
          </template>
          <el-menu-item v-for="(item, index) in menu.children" :key="index" :index="item.path">
            <span class="menuitemwrap" :style="{backgroundColor: $route.path === item.path ? settings.themeColor : settings.primaryColor}">{{item.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-drawer>
    <i style="font-size: 30px;cursor: pointer;line-height: 64px" @click="drawer = true" id="btn-menu"
      class="el-icon-s-unfold"></i>
  </div>
</template>

<script>
export default {
  props: ['logo', 'isCollapse'],
  inject: ['menus', 'isMobile', 'slots', 'settings'],
  data () {
    return {
      drawer: true
    }
  },
  watch: {
    logo () {
      this.$slots.logo = this.slots.logo[0]
    }
  },
  created () {
    this.$slots.logo = this.slots.logo[0]
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.left-menu
  width 100%
  height 100%
  #btn-menu
    position fixed
    top 0
    left 10px
    z-index 100
  >>> .el-drawer:focus
    outline none !important
  >>> .el-drawer.ltr
    width 260px !important
  >>> .el-drawer__header
        display none !important
    .sideDrawer
      width 100%
      height 100%
      color #fff
      border-right none
      box-shadow 2px 0 6px rgba(0, 21, 41, 0.05)
      user-select none // 不可选中文本
      .el-menu-item
        padding 0
        padding-left 0 !important
        height 46px
        overflow hidden
        &:hover
          background-color transparent !important
          color #fff !important
          height 46px
          overflow hidden
        .menuitemwrap
          width 100%
          box-sizing border-box
          padding-left 60px
      .is-active
        color #fff
      .logo
        width 100%
        height 64px
        overflow hidden
</style>
