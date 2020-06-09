const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const projectPath = process.cwd();

module.exports = {
  // entry:{
  //     main:'./src/index.js',
  //     // theOther:'./src/theOther.js'
  // },
  entry: './src/main.js',
  output: {
    filename: 'js/main.[hash:8].js',
    path: `${projectPath}/dist`,
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json','.vue'], // 表示这几个文件的后缀名可以省略不写
    alias: {
      '@': path.resolve(__dirname, '../src/')// 这样@就表示项目根目录中src的这一层路径（绝对路径）
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html', // 打包后的名字
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false
      }, // 压缩至一行
      hash: true
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 加快编译速度，不包含node_modules文件夹内容
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // 优化打包速度
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              // eslint options (if necessary)
              fix: true
            }
          }
        ]
      }
    ]
  }
};
