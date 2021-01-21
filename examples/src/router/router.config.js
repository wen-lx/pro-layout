import BasicLayout from '../layouts/BasicLayout.vue'
import i18n from '@/i18n/index' // 引入多语言

const contantRoutes = [
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
  }
]
const asyncRoutes =  [
  // 欢迎页
  {
    path: '/welcome',
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

export {
  contantRoutes,
  asyncRoutes
}