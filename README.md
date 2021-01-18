# vue-pro-layout
### Examples
```
cd examples
npm install
npm run serve
```

### Usage
```
npm install vue-pro-layout --save
// or
yarn add vue-pro-layout
```

```vue
// layouts/BasicLayout.vue
<template>
  <pro-layout
    :menus="menus"
    :mediaQuery="mediaQuery"
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
        theme: 'dark',
        primaryColor: '#001529',
        isShow: true
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
```

```js
// router/router.config.js
import BasicLayout from '../layouts/BasicLayout.vue'
import i18n from '@/i18n/index' // 引入多语言

export default [
  // 根路由
  {
    path: '/',
    redirect: '/login'
  },
  // 登录路由
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue')
  },
  // 欢迎页
  {
    path: '/welcome',
    redirect: '/welcome',
    component: BasicLayout,
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        meta: { isSuperAdmin: 'hidden', isAdmin: 'admin' },
        component: () => import('@/views/Welcome/Welcome.vue')
      }
    ]
  },
  // 系统配置相关路由
  {
    path: '/system',
    redirect: '/system/system-config',
    meta: {
      title: i18n.t('router.system'),
      iconClass: 'el-icon-s-tools',
      prolayout: true // 显示在菜单栏
    },
    component: BasicLayout,
    children: [
      {
        path: '/system/system-config',
        name: 'system-config',
        meta: { title: i18n.t('router.system-config'), menu: true }, // 显示在菜单栏
        component: () => import('@/views/SystemInfo/SystemConfig.vue')
      }
    ]
  },
  // 人员信息相关路由
  {
    path: '/person',
    redirect: '/person/member-manage',
    meta: {
      title: i18n.t('router.member'),
      iconClass: 'el-icon-user-solid',
      prolayout: true
    },
    component: BasicLayout,
    children: [
      {
        path: '/person/member-manage',
        name: 'member-manage',
        meta: { title: i18n.t('router.member-manage'), menu: true },
        component: () => import('@/views/PersonInfo/MemberManage.vue')
      },
      {
        path: '/person/admin-manage',
        name: 'admin-manage',
        meta: { title: i18n.t('router.admin-manage'), menu: false },
        component: () => import('@/views/PersonInfo/AdminManage.vue')
      },
      {
        path: '/person/visitor-manage',
        name: 'visitor-manage',
        meta: { title: i18n.t('router.visitor-manage'), menu: true },
        component: () => import('@/views/PersonInfo/VisitorManage.vue')
      }
    ]
  },
  // 设备信息相关路由
  {
    path: '/device',
    redirect: '/device/device-manage',
    meta: {
      title: i18n.t('router.device'),
      iconClass: 'el-icon-s-platform',
      prolayout: true
    },
    component: BasicLayout,
    children: [
      {
        path: '/device/device-manage',
        name: 'device-manage',
        meta: { title: i18n.t('router.device-manage'), menu: true },
        component: () => import('@/views/DeviceInfo/DeviceManage.vue')
      },
      {
        path: '/device/device-style-manage',
        name: 'device-style-manage',
        meta: { title: i18n.t('router.style-manage'), menu: true },
        component: () => import('@/views/DeviceInfo/StyleManage.vue')
      },
      {
        path: '/device/time-template-manage',
        name: 'time-template-manage',
        meta: { title: i18n.t('router.time-template-manage'), menu: true },
        component: () => import('@/views/DeviceInfo/TimeTemplateManage.vue')
      }
    ]
  },
  // 匹配不到，展示404
  {
    path: '/*',
    name: 'Exception',
    meta: { isAdmin: 'admin' },
    component: () => import('@/views/Exception/Exception.vue')
  }
]
```

### Customize configuration
See [Configuration Reference](https://github.com/wen-lx/pro-layout).
