
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
      component: require(`@/pages${item.path}/index.vue`).default,
      // component: resolve => require([`@/pages${item.path}/index.vue`], resolve),
      ...item
    }))
  ]
};
