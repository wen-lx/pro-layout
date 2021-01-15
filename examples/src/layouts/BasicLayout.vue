<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :mediaQuery="mediaQuery"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    :siderWidth="208"
    v-bind="settings"
  >
    <template v-slot:logo>
      <div>
        <img src="../assets/logo.png" style="width: 40px; height: 40px;padding: 12px;float: left"/>
        <span style="font-size: 24px;line-height: 64px;float: left">Pro Layout</span>
      </div>
    </template>
    <template v-slot:left>
      <div>
        <el-tooltip title="刷新页面">
          <i class="el-icon-refresh-left" style="cursor: pointer;font-size: 30px;line-height: 64px"></i>
        </el-tooltip>
      </div>
    </template>
    <template v-slot:right>
      <div style="line-height: 64px">
        rightContentRender
      </div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
// import { i18nRender } from '../locales'
import menus from '../router/router.config'
export default {
  data () {
    return {
      menus: menus,
      collapsed: false,
      mediaQuery: {},
      isMobile: false,
      settings: {
        layout: 'sidemenu',
        contentWidth: 'Fluid',
        theme: 'dark',
        primaryColor: '#52C41A',
        fixedHeader: false,
        fixSiderbar: false,
        colorWeak: false,
        hideHintAlert: false,
        hideCopyButton: false
      }
    }
  },
  mounted () {
  },
  methods: {
    handleMediaQuery (val) {
    },
    handleCollapse (val) {
      this.collapsed = val
    },
    handleSettingChange ({ type, value }) {
      console.log(type, value)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
