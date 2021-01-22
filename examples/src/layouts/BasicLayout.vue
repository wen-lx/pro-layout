<template>
  <pro-layout
    :menus="menus"
    :mediaQuery="mediaQuery"
    :handleMediaQuery="handleMediaQuery"
    :isMobile="isMobile"
    :settings="settings"
  >
    <template v-slot:logo>
      <div>
        <img src="../assets/logo.png" style="width: 40px; height: 40px;padding: 12px;float: left"/>
        <span style="font-size: 24px;line-height: 64px;float: left">Pro Layout</span>
      </div>
    </template>
    <template v-slot:left>
      <div>
        <i class="el-icon-refresh-left" style="cursor: pointer;font-size: 30px;line-height: 64px"></i>
        <i class="el-icon-close" style="cursor: pointer;font-size: 30px;line-height: 64px"></i>
      </div>
    </template>
    <template v-slot:right>
      <div style="line-height: 64px">
        <i class="el-icon-s-custom" style="cursor: pointer;font-size: 20px;line-height: 64px"></i> admin 
      </div>
    </template>
    <router-view />
  </pro-layout>
</template>

<script>
// import { i18nRender } from '../locales'
import { asyncRoutes } from '../router/router.config'
export default {
  data () {
    return {
      menus: asyncRoutes.filter(item => item.meta.menu !== false),
      collapsed: false,
      mediaQuery: {
        'screen-xs': {
          maxWidth: 575
        },
        'screen-sm': {
          minWidth: 576,
          maxWidth: 767
        },
        'screen-md': {
          minWidth: 768,
          maxWidth: 991
        },
        'screen-lg': {
          minWidth: 992,
          maxWidth: 1199
        },
        'screen-xl': {
          minWidth: 1200,
          maxWidth: 1599
        },
        'screen-xxl': {
          minWidth: 1600
        }
      },
      isMobile: false,
      settings: {
        layout: 'sidemenu',
        themeColor: '#1890ff',
        primaryColor: '#001529',
        isShow: true
      }
    }
  },
  computed: {
    // ...mapState({
    //   // 动态主路由
    //   mainMenu: state => state.permission.addRouters
    // })
  },
  mounted () {
  },
  methods: {
    handleMediaQuery (val) {
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
      } else if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
      }
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
