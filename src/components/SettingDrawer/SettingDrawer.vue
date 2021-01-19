<template>
  <div class="setting">
    <el-drawer
      :visible.sync="drawer">
      <div class="content">
        <span class="title">主题设置</span>
        <div>
          <p style="padding: 10px">Theme color</p>
          <span class="color-box" v-for="(item, index) in colorList" :key="index" :style="{backgroundColor: item.value}" @click="changeThemeColor(item.value)">
            <i class="el-icon-check" style="color: #fff;" v-show="settings.themeColor === item.value"></i>
          </span>
        </div>
        <div>
          <p style="padding: 10px">Navigation Mode</p>
          <span class="nav-mode" @click="changeNavMode('sidemenu')">
            <span style="height: 44px;background: #000;width: 14px;borderRadius: 4px 0 0 4px;float: left"></span>
            <span style="height: 44px;background: #ededed;width: 30px;borderRadius: 0 4px 4px 0;float: left;text-align: center;"><i class="el-icon-check" style="color: #f00;font-size: 22px;line-height: 44px" v-show="settings.layout === 'sidemenu'"></i></span>
          </span>
          <span class="nav-mode" @click="changeNavMode('topmenu')">
            <span style="height: 10px;background: #000;width: 44px;borderRadius: 4px 4px 0 0;display: block"></span>
            <span style="height: 34px;background: #ededed;width: 44px;borderRadius: 0 0 4px 4px;text-align: center;"><i class="el-icon-check" style="color: #f00;font-size: 22px;line-height: 34px" v-show="settings.layout === 'topmenu'"></i></span>
          </span>
        </div>
      </div>
    </el-drawer>
    <slot></slot>
    <i :class="['set-btn', !drawer ? 'el-icon-setting' : 'el-icon-close']" @click="drawer = drawer ? false : true" :style="{backgroundColor: settings.themeColor,right: !drawer ? '0px' : '300px'}"></i>
  </div>
</template>

<script>
export default {
  inject: ['settings'],
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
      ]
    }
  },
  methods: {
    changeThemeColor (color) {
      this.settings.themeColor = color
    },
    changeNavMode (mode) {
      this.settings.layout = mode
    }
  }
}
</script>

<style lang="stylus" scoped>
.setting
  width 100%
  height 100%
  .set-btn
    position fixed
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
      float left
  >>> .el-drawer:focus
    outline none !important
  >>> .el-drawer.rtl
    width 300px !important
</style>
