
export const navRoutes = [
  {
    path: '/sync',
    name: 'sync',
    title: '.sync'
  },
  {
    path: '/hook',
    name: 'hook',
    title: 'hook'
  },
  {
    path: '/attrs_listener',
    name: 'attrs_listener',
    title: '$attrs_$listener'
  },
  {
    path: '/slot',
    name: 'myslot',
    title: 'slot'
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    title: '自定义生命周期'
  },
  {
    path: '/extend',
    name: 'extend',
    title: 'extend'
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    title: '依赖注入'
  },
  {
    path: '/transition',
    name: 'mytransition',
    title: 'transition'
  }, {
    path: '/grid',
    name: 'grid',
    title: 'grid'
  }
];

export default {
  mode: 'hash',
  routes: [
    {
      path: '',
      redirect: '/sync'
    },
    ...navRoutes.map(item => ({
      component: require(`@/pages${item.path}${item.path}.vue`).default,
      // component: resolve => require([`@/pages${item.path}/index.vue`], resolve),
      ...item
    }))
  ]
};
