<template>
  <div class="setting">
    <el-drawer
      title="主题设置"
      :visible.sync="drawer">
      <div class="content">
        <p style="padding-bottom: 10px">Theme color</p>
        <span class="color-box" v-for="(item, index) in colorList" :key="index" :style="{backgroundColor: item.value}" @click="changeThemeColor(item.value)">
          <i class="el-icon-check" style="color: #fff;" v-show="themeColor === item.value"></i>
        </span>
      </div>
    </el-drawer>
    <i v-if="!drawer" class="el-icon-s-tools set-btn" @click="drawer = true" :style="{color: themeColor}"></i>
    <i v-else class="el-icon-close set-btn" @click="drawer = false" :style="{color: themeColor}"></i>
  </div>
</template>

<script>
import { setThemeColor } from '../../utils/dynamicTheme.js'
export default {
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
      themeColor: localStorage.getItem('themeColor')
    }
  },
  provide () {
    return {
      themeColor: this.themeColor
    }
  },
  methods: {
    changeThemeColor (color) {
      this.themeColor = color
      localStorage.setItem('themeColor', color)
      setThemeColor(color)
    }
  }
}
</script>

<style lang="stylus" scoped>
.setting
  position relative
  .content
    padding 0 20px
    .color-box
      display inline-block
      text-align center
      border-radius 4px
      margin-right 6px
      width 20px
      height 20px
  .set-btn
    position absolute
    top 200px
    z-index 999
    font-size 60px
    border-radius 20px
</style>
