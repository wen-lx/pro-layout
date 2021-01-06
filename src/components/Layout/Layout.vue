<template>
  <div class="container">
    <div class="left">
      <SiderMenu></SiderMenu>
    </div>
    <div class="right">
      <div class="header">Header</div>
      <div class="main">Main</div>
      <div class="footer">Footer</div>
    </div>
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
  .left
    background-color #001529
    color #fff
    text-align center
    height 100%
  .right
    width calc(100% - 220px)
    .header
      height 60px
      background pink
    .footer
      position absolute
      bottom 0
      width calc(100% - 220px)
      background pink
</style>
