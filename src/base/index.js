import Vue from 'vue';

// 第一种方式引入
// import synopsis from './synopsis.vue';
// import codes from './codes.vue';
// import title from './title.vue';

// Vue.use(synopsis);
// Vue.use(codes);
// Vue.use(title);

// Vue.component('c-synopsis', synopsis);
// Vue.component('c-codes', codes);
// Vue.component('c-title', title);

// 第二种方式引入
const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /.+\.(vue)$/
);

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);

  // 获取组件的命名
  const componentName = fileName.replace('./', 'c-').replace('.vue', '');
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  );
});
