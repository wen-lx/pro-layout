<template>
  <div class="top-menu">
    <el-menu class="menus-wrap" :default-active="$route.path" router
    background-color="#001529" text-color="#ddd" active-text-color="#fff" mode="horizontal" menu-trigger="hover">
      <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.index" :show-timeout="100" :hide-timeout="100">
        <template slot="title">
          <i :class="menu.meta.icon"></i>
          <span>{{menu.menuTitle}}</span>
        </template>
        <el-menu-item v-for="(item, index) in menu.menuItems" :key="index" :index="item.index" >{{item.title}}{{$route.path === item.index}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  inject: ['menus', 'themeColor', 'navMode'],
  data () {
    return {
      isShow: false,
      themeColor: ''
    }
  },
  mounted () {
    this.themeColor = localStorage.getItem('themeColor')
    this.isShow = true
  }
}
</script>

<style lang="stylus" scoped>
.top-menu
  position absolute
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
</style>

