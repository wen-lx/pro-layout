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
    <!-- <template v-slot:menuHeaderRender>
      <div>
        <img src="../assets/logo.svg" />
        <h1>Pro Layout</h1>
      </div>
    </template>
    <template v-slot:headerContentRender>
      <div>
        <el-tooltip title="刷新页面">
          <i class="el-icon-refresh-left" style="cursor: pointer;" @click="() => { $message.info('假的') }"></i>
        </el-tooltip>
      </div>
    </template>
    <template v-slot:rightContentRender>
      <div :class="['ant-pro-global-header-index-right', settings.layout === 'topmenu' && `ant-pro-global-header-index-${settings.theme}`]">
        rightContentRender
      </div>
    </template>
    <template v-slot:footerRender>
      <div>footerRender</div>
    </template>
    <setting-drawer
      :settings="settings"
      @change="handleSettingChange"
    >
      <div style="margin: 12px 0;">
        This is SettingDrawer custom footer content.
      </div>
    </setting-drawer> -->
    <router-view />
  </pro-layout>
</template>

<script>
// import { i18nRender } from '../locales'
export default {
  data () {
    return {
      menus: [{
        menuTitle: '导航一',
        index: '/aa',
        meta: {icon: 'el-icon-location'},
        menuItems: [{
          title: '选项1',
          index: '/111',
          meta: {icon: 'el-icon-location'}
        },{
          title: '选项2',
          index: '/222',
          meta: {icon: 'el-icon-location'}
        }]
      },{
        menuTitle: '导航二',
        index: '/cc',
        meta: {icon: 'el-icon-location'},
        menuItems: [{
          title: '选项3',
          index: '/333',
          meta: {icon: 'el-icon-location'}
        },{
          title: '选项4',
          index: '/444',
          meta: {icon: 'el-icon-location'}
        }]
      },{
        menuTitle: '导航三',
        index: '/ss',
        meta: {icon: 'el-icon-location'},
        menuItems: [{
          title: '选项5',
          index: '/555',
          meta: {icon: 'el-icon-location'}
        },{
          title: '选项6',
          index: '/666',
          meta: {icon: 'el-icon-location'}
        }]
      }],
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
      console.log('media', val)
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
