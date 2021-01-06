<template>
<transition name="menu-fade-show">
  <div id="layout" :class="{ collapse: isCollapse }">
    <el-menu unique-opened :collapse="isCollapse" class="sideMenu">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </template>
        <el-menu-item index="2-1">选项3</el-menu-item>
        <el-menu-item index="2-2">选项4</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">导航三</span>
        </template>
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
export default {
  data () {
    return {
      isCollapse: false
    }
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
  transition all 1s ease
.menu-fade-show-enter
  transform translateX(-100px)
  opacity 0
// #layout
//   width 200px
//   height 100%
//   position relative
//   transition all 0.4s ease
//   .sideMenu
//     border-right none
//     &:not(.el-menu--collapse)
//       width $sideMenuWidth
//   #fold
//     position absolute
//     bottom 0
//     width 100%
//     padding-bottom 20px
#layout >>>
  .el-menu
    background none
    border 0
    box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
  .el-submenu__title
    text-align left
    user-select none // 不可选中文本
    color white !important
    &:hover
      background linear-gradient(to right, rgba(151,246,255, 0.4), rgba(151,246,255, 0))
    i
      color white
  .el-menu-item
    text-align left
    user-select none // 不可选中文本
    color white !important
    padding-left 64px !important

  // .el-menu--inline
  //   background none
  .el-menu-item:hover
    background linear-gradient(to right, rgba(151,246,255, 0.4), rgba(151,246,255, 0))
  .el-menu-item.is-active
    background linear-gradient(to right, rgba(151,246,255, 0.4), rgba(151,246,255, 0))
  .el-menu-item-group__title // 隐藏菜单分组显示
    display none
  // 设置垂直菜单样式
  .el-menu--vertical
    .el-menu
      padding 0
    .el-menu-item
      background #11AFAF
    .el-menu-item:hover
      background #ED4264
    .el-menu-item.is-active
      background #c83660
</style>
