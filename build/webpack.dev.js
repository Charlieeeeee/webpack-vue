const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const FriendlyErrors = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const os=require("os");

const port = "3000"

// 获取ip
function getIp(){
  const networkInterfaces=os.networkInterfaces();
  let ip = ''
  let netObj = {};
  if (networkInterfaces['en0']) {
      netObj = networkInterfaces['en0'];
  } else {
      netObj = networkInterfaces['WLAN'];
  }
  if (networkInterfaces['以太网']) {
    netObj = networkInterfaces['以太网'];
  }
  for (let i=0;i<netObj.length;i++) {
      if (netObj[i].family === 'IPv4') {
          ip = netObj[i].address;
          break;
      }
  }
  return ip
}
const ip = getIp();

const devConfig = {
  mode: 'development',
  devtool: '#source-map',
  devServer: {
    clientLogLevel: 'warning', // warning时才输出更新// 可能的值有 none, error, warning 或者 info（默认值)
    hot: true, // 启用 webpack 的模块热替换特性, 这个需要配合： webpack.HotModuleReplacementPlugin插件
    contentBase: path.join(__dirname, 'dist'), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
    compress: true, // 一切服务都启用gzip 压缩
    host: ip, // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问 0.0.0.0
    port: port, // 端口
    open: true, // 是否打开浏览器
    overlay: { // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
      warnings: true,
      errors: true
    },
    publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
    // proxy: {
    //   '/api': {
    //     target: `http://localhost:${port}`,
    //     changeOrigin: true,
    //     secure: false,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // },
    quiet: true, // necessary for FriendlyErrorsPlugin. 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
    watchOptions: { // 监视文件相关的控制选项
      poll: true, // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
      ignored: /node_modules/, // 忽略监控的文件夹，正则
      aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 更容易查看(patch)的依赖
    new webpack.HotModuleReplacementPlugin(), // 替换插件
    new FriendlyErrors({
      compilationSuccessInfo: {
          messages: [`Your application is running here: http://localhost:${port}`,
                     `Your application is running here: http://${ip}:${port}`],
      }
   }),
   new HardSourceWebpackPlugin({
    cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
    recordsPath: 'node_modules/.cache/hard-source/[confighash]/records.json',
    configHash: function (webpackConfig) {
      return require('node-object-hash')({ sort: false }).hash(webpackConfig);
    },
    environmentHash: {
      root: process.cwd(),
      directories: [],
      files: ['package-lock.json', 'yarn.lock'],
    },
  }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true// 可以在控制台看到class在哪个文件的第几行
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')({ overrideBrowserslist: ['> 0.15% in CN'] }), // 添加前缀
                require('@moohng/postcss-px2vw')(require('./pxToVw'))
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true// 可以在控制台看到class在哪个文件的第几行
            }
          }
        ]// 从右(下)到左(上)处理
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',//file-loader编译更快，在开发环境还是用这个吧
            options: {
              // outputPath:'./',
              publicPath: './', // 解决打包后图片引用路径问题
              name: 'static/assets/[name].[ext]',
              limit: 10000// 10kb以内的才转为base64
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          } // 优化处理img
        ]
      }
    ]
  }
};

module.exports = merge(commonConfig, devConfig);
