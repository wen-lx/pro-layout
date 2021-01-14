<template>
  <div class="container" :style="{display: navMode === 'side' ? 'flex' : 'block'}">
    <SiderMenu v-if="navMode === 'side'" :themeColor="themeColor"></SiderMenu>
    <TopMenu v-else :themeColor="themeColor"></TopMenu>
    <div :style="{paddingTop: navMode === 'side' ? '0' : '64px'}"><slot></slot></div>
    <!-- <setting-drawer></setting-drawer> -->
    <div class="setting">
      <el-drawer
        :visible.sync="drawer">
        <div class="content">
          <span class="title">主题设置</span>
          <div>
            <p style="padding: 10px">Theme color</p>
            <span class="color-box" v-for="(item, index) in colorList" :key="index" :style="{backgroundColor: item.value}" @click="changeThemeColor(item.value)">
              <i class="el-icon-check" style="color: #fff;" v-show="themeColor === item.value"></i>
            </span>
          </div>
          <div>
            <p style="padding: 10px">Navigation Mode</p>
            <span class="nav-mode" @click="changeNavMode('side')">
              <span style="height: 44px;background: #000;width: 14px;borderRadius: 4px 0 0 4px;float: left"></span>
              <span style="height: 44px;background: #ededed;width: 30px;borderRadius: 0 4px 4px 0;float: left;text-align: center;"><i class="el-icon-check" style="color: #f00;font-size: 22px;line-height: 44px" v-show="navMode === 'side'"></i></span>
            </span>
            <span class="nav-mode" @click="changeNavMode('top')">
              <span style="height: 10px;background: #000;width: 44px;borderRadius: 4px 4px 0 0;float: left"></span>
              <span style="height: 34px;background: #ededed;width: 44px;borderRadius: 0 0 4px 4px;float: left;text-align: center;"><i class="el-icon-check" style="color: #f00;font-size: 22px;line-height: 34px" v-show="navMode === 'top'"></i></span>
            </span>
          </div>
        </div>
      </el-drawer>
      <i :class="['set-btn', !drawer ? 'el-icon-setting' : 'el-icon-close']" @click="drawer = drawer ? false : true" :style="{backgroundColor: themeColor,right: !drawer ? '0px' : '300px'}"></i>
    </div>
  </div>
</template>

<script>
import SiderMenu from '../SiderMenu'
import TopMenu from '../TopMenu'
import SettingDrawer from '../SettingDrawer'
export default {
  components: {
    SiderMenu,
    TopMenu,
    SettingDrawer
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
      ],
      themeColor: localStorage.getItem('themeColor'),
      navMode: localStorage.getItem('navMode')
    }
  },
  provide () {
    return {
      themeColor: this.themeColor,
      navMode: this.navMode
    }
  },
  mounted () {
    console.log(this.themeColor, this.navMode)
  },
  methods: {
    changeThemeColor (color) {
      this.themeColor = color
      localStorage.setItem('themeColor', color)
    },
    changeNavMode (mode) {
      this.navMode = mode
      localStorage.setItem('navMode', mode)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100%
  .setting
    position absolute
    top 0
    right 0
    .set-btn
      position relative
      top 400px
      right 300px
      z-index 10000
      font-size 20px
      color #fff
      padding 14px
      border-radius 4px 0 0 4px
      transition all 0.3s ease
    .title
      position absolute
      top 20px
      left 30px
      font-size 20px
    .content
      padding 0 20px
      .color-box
        text-align center
        border-radius 4px
        margin-right 6px
        width 20px
        height 20px
      .nav-mode
        margin-right 20px
        width 44px
        height 44px
    >>> .el-drawer:focus
      outline none !important
    >>> .el-drawer.rtl
      width 300px !important
</style>
