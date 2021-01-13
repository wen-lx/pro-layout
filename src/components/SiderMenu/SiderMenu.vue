<template>
  <transition name="menu-fade-show">
    <div v-show="isShow" id="layout" :class="{ collapse: isCollapse }">
      <el-menu :default-active="activePath" unique-opened router
      :collapse="isCollapse" background-color="#001529" text-color="#ddd" class="sideMenu">
        <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.index">
          <template slot="title">
            <i :class="menu.meta.icon"></i>
            <span slot="title">{{menu.menuTitle}}</span>
          </template>
          <el-menu-item v-for="(item, index) in menu.menuItems" :key="index" :index="item.index" :style="{backgroundColor: activePath === item.index ? themeColor : '#001529'}">{{item.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
      <div id="fold">
        <i style="font-size: 30px;cursor: pointer" @click="changeIsCollapse"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import { getThemeColor } from '../../utils/dynamicTheme.js'
export default {
  inject: ['menus'],
  data () {
    return {
      isShow: false,
      isCollapse: false,
      activePath: '/',
    }
  },
  watch: {
    getThemeColor () {
      console.log(5678)
      return getThemeColor
    }
  },
  mounted () {
    this.activePath = this.$route.path
    this.isShow = true
  },
  methods: {
    changeIsCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu-fade-show-enter-active
  transition all 0.4s ease
.menu-fade-show-enter
  transform translateX(-100px)
  opacity 0
#layout
  height 100%
  background-color #001529
  color #fff
  position relative
  .sideMenu
    border-right none
    &:not(.el-menu--collapse)
      width 200px
  #fold
    position absolute
    bottom 0
    width 100%
    text-align center
    padding-bottom 20px
#layout >>>
  .el-menu
    background none
    border 0
    box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
  .el-submenu__title
    text-align left
    user-select none // 不可选中文本
  .el-menu--inline
    .el-menu-item
      text-align left
      user-select none
      color #fff
</style>
