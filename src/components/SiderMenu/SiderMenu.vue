<template>
  <el-menu :default-active="$route.path" unique-opened router
  :collapse="isCollapse" :background-color="settings.primaryColor" text-color="#ccc" class="sideMenu">
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
    <div id="fold">
      <i style="font-size: 30px;cursor: pointer" @click="changeIsCollapse"
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
  </el-menu>
</template>

<script>
export default {
  props: ['logo'],
  inject: ['menus', 'slots', 'settings'],
  data () {
    return {
      isCollapse: false
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
    changeIsCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="stylus" scoped>
.sideMenu
  height 100%
  color #fff
  border-right none
  box-shadow 2px 0 6px rgba(0, 21, 41, 0.05)
  user-select none // 不可选中文本
  // transition 0s opacity ease
  &:not(.el-menu--collapse)
    width 210px
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
  #fold
    position absolute
    bottom 0
    width 100%
    text-align center
    padding-bottom 20px
</style>
