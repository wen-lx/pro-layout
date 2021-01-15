import BasicLayout from '../layouts/BasicLayout.vue'
export default [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/111',
        component: () => import('@/views/Person.vue')
      },{
        path: '/222',
        component: () => import('@/views/Member.vue')
      }
    ]
  }
]