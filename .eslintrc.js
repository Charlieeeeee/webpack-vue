// .eslintrc.js
// https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parserOptions: {
      parser: 'vue-eslint-parser',//'babel-eslint'不识别dynamic-import
    },
    env: {
      browser: true,
      node: true,
      commonjs: true,
      es6: true
    },
    extends: [
      '@vue/standard'//继承该库的eslint检查
    ],
    globals: {
      NODE_ENV: true
    },
    rules: {
      'no-new': 'off',
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // 添加，分号必须
      semi: ['error', 'always'],
      'no-unexpected-multiline': 'off',
      'space-before-function-paren': ['error', 'never'],
      // 'quotes': ["error", "double", { "avoidEscape": true }]
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true
        }
      ]
    }
  };