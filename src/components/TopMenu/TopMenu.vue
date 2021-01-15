<template>
  <div class="top-menu">
    <el-menu class="menus-wrap" :default-active="$route.path" router
    background-color="#001529" text-color="#ddd" active-text-color="#fff" mode="horizontal" menu-trigger="hover">
    <h2 style="display: inline-block;color: #fff;line-height: 64px;float: left;margin-right: 20px">Pro Layout</h2>
      <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.index" :show-timeout="100" :hide-timeout="100">
        <template slot="title">
          <i :class="menu.meta.icon"></i>
          <span>{{menu.menuTitle}}</span>
        </template>
        <el-menu-item v-for="(item, index) in menu.menuItems" :key="index" :index="item.index" >
          <span class="menuitemwrap" :style="{backgroundColor: $route.path === item.index ? themeColor : '#001529'}">{{item.title}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['themeColor'],
  inject: ['menus', 'navMode'],
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.el-menu-item
  padding 0
  padding-left 0 !important
  .menuitemwrap
    width 100%
    padding-left 10px
.top-menu
  position fixed
  z-index 100
  background-color #001529
  width 100%
  height 64px
  text-align center
  >>> .el-menu--horizontal
        display inline-block
        border 0
        .el-submenu__title
          height 64px
          // border 0 !important
</style>

