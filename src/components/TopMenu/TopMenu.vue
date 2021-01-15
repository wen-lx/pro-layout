<template>
  <div class="top-menu" :style="{backgroundColor: settings.primaryColor}">
    <el-menu class="menus-wrap" :default-active="$route.path" router
    :background-color="settings.primaryColor" text-color="#ccc" active-text-color="#fff" mode="horizontal" menu-trigger="hover">
    <h2 style="display: inline-block;color: #fff;line-height: 64px;float: left;margin-right: 20px"><slot name="logo"></slot></h2>
      <el-submenu v-for="(menu, index) in menus" :key="index" :index="menu.path" :show-timeout="100" :hide-timeout="100">
        <template slot="title">
          <i :class="menu.meta.iconClass"></i>
          <span>{{menu.meta.title}}</span>
        </template>
        <el-menu-item v-for="(item, index) in menu.children" :key="index" :index="item.path" >
          <span class="menuitemwrap" :style="{backgroundColor: $route.path === item.path ? themeColor : settings.primaryColor}">{{item.meta.title}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div style="position: fixed;left:10px;top: 0px"><slot name="left"></slot></div>
    <div style="position: fixed;right:10px;top: 0px"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  props: ['themeColor', 'left', 'right', 'logo'],
  inject: ['menus', 'navMode', 'slots', 'settings'],
  data () {
    return {
    }
  },
  watch: {
    left () {
      this.$slots.left = this.slots.left[0]
    },
    right () {
      this.$slots.right = this.slots.right[0]
    },
    logo () {
      this.$slots.logo = this.slots.logo[0]
    }
  },
  created () {
    this.$slots.logo = this.slots.logo[0]
    this.$slots.left = this.slots.left[0]
    this.$slots.right = this.slots.right[0]
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
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
    padding-left 10px
.top-menu
  position fixed
  z-index 100
  width 100%
  height 64px
  text-align center
  color #fff
  >>> .el-menu--horizontal
        display inline-block
        border 0
        .el-submenu__title
          height 64px
          // border 0 !important
</style>

