
export default {
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: '/verticalCenter'
    },
    {
      path: '/verticalCenter',
      name: 'verticalCenter',
      component: () => import('@/pages/verticalCenter')// 懒加载，组件，页面加载更快
    },
    {
      path: '/msg',
      name: 'msg',
      // component: resolve => require(['@/pages/msg'], resolve) // 这种方式会多打包出一个JS
      // component: r => require.ensure([], () => r(require('@/pages/msg')), 'index') // 这种方式会多打包出一个JS
      component: () => import('@/pages/msg') // 推荐使用这种方式
    }
  ]
};
