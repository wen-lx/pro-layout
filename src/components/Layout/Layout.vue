<template>
  <div class="container">
    <SiderMenu></SiderMenu>
    <div class="right">
      <div class="header">Header</div>
      <div class="main"><router-view></router-view></div>
      <div class="footer">Footer</div>
    </div>
    <div class="anywhere"><slot></slot></div>
  </div>
</template>

<script>
import SiderMenu from '../SiderMenu'
export default {
  components: {
    SiderMenu
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  display flex
  .right
    flex 1
    position relative
    .header
      height 60px
      background pink
    .footer
      position absolute
      bottom 0
      width 100%
      background pink
  .anywhere
    position absolute
</style>
