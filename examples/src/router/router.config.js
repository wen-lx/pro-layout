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
    component: () => import('@views/Login/Login.vue')
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
        component: () => import('@views/Welcome/Welcome.vue')
      }
    ]
  },
  // 系统配置相关路由
  {
    path: '/system',
    redirect: '/system/system-config',
    meta: {
      title: i18n.t('app.system-info'),
      iconClass: 'el-icon-s-tools'
    },
    component: BasicLayout,
    children: [
      {
        path: '/system/system-config',
        name: 'system-config',
        meta: { title: i18n.t('app.system-config'), isAdmin: 'admin', role: 'getSystemList' },
        component: () => import('@views/SystemInfo/SystemConfig.vue')
      },
      {
        path: '/system/device-type-manage',
        name: 'device-type-manage',
        meta: { title: i18n.t('app.device-type'), isAdmin: 'admin' },
        component: () => import('@views/SystemInfo/DeviceTypeManage.vue')
      }
    ]
  },
  // 人员信息相关路由
  {
    path: '/person',
    redirect: '/person/member-manage',
    meta: {
      title: i18n.t('member.info'),
      iconClass: 'el-icon-user-solid'
    },
    component: BasicLayout,
    children: [
      {
        path: '/person/member-manage',
        name: 'member-manage',
        meta: { title: i18n.t('member.management'), isAdmin: 'admin', role: 'getUserList', showGroupManage: 'show' },
        component: () => import('@views/PersonInfo/MemberManage.vue')
      },
      {
        path: '/person/member-invitation',
        name: 'member-invitation',
        meta: { title: '', isAdmin: 'admin', role: 'getUserList', showGroupManage: 'show' },
        component: () => import('@views/PersonInfo/AdminManage.vue')
      },
      {
        path: '/person/visitor-apply-manage',
        name: 'visitor-apply-manage',
        meta: { title: i18n.t('member.visitor.appointment'), isAdmin: 'admin', role: 'getVisitorApplyList', showGroupManage: 'show' },
        component: () => import('@views/PersonInfo/VisitorManage.vue')
      }
    ]
  },
  // 设备信息相关路由
  {
    path: '/device',
    redirect: '/device/device-manage',
    meta: {
      title: i18n.t('app.device-info'),
      iconClass: 'el-icon-s-platform'
    },
    component: BasicLayout,
    children: [
      {
        path: '/device/device-manage',
        name: 'device-manage',
        meta: { title: i18n.t('app.device-manage'), isAdmin: 'admin', role: 'getDeviceList' },
        component: () => import('@views/DeviceInfo/DeviceManage.vue')
      },
      {
        path: '/device/device-style-manage',
        name: 'device-style-manage',
        meta: { title: i18n.t('app.device-style-manage'), isAdmin: 'admin', role: 'getStylesList' },
        component: () => import('@views/DeviceInfo/StyleManage.vue')
      },
      {
        path: '/device/time-template-manage',
        name: 'time-template-manage',
        meta: { title: i18n.t('app.time-template'), isAdmin: 'admin', role: 'getTimeTemplateList' },
        component: () => import('@views/DeviceInfo/TimeTemplateManage.vue')
      }
    ]
  },
  // 匹配不到，展示404
  {
    path: '/*',
    name: 'Exception',
    meta: { isAdmin: 'admin' },
    component: () => import('@views/Exception/Exception.vue')
  }
]
