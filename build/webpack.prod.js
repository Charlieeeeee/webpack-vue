const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');// 压缩css文件
const TerserPlugin = require('terser-webpack-plugin');// terser-webpack-plugin 可以压缩js，mode:"production"就可以了
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common');

let env = '';
switch (process.argv[3]) {
  case 'prod': {
    env = require('./config/prod.env');
    break;
  }
  case 'pre': {
    env = require('./config/pre.env');
    break;
  }
  case 'test': {
    env = require('./config/test.env');
    break;
  }

}

const prodConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },//使用动态import的文件会另外打包成JS,使用到的时候再去加载
    //如果是动态加载js，import(/* webpackChunkName: "lodash" */ 'lodash')可以指定打包后的文件名
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin({

      }),
      new TerserPlugin({
        cache: true,
        sourceMap: true,
        parallel: true // 并行压缩，大家同时开始压缩
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkname: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        oneOf:[
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              {
                loader:MiniCssExtractPlugin.loader,
                options:{
                  publicPath:'../'
                }
              },
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
                loader: 'url-loader', // file-loader 退出历史舞台，url更加强大，可以把图片和字体处理为base64
                options: {
                  // outputPath:'./',
                  publicPath: './', // 解决打包后图片引用路径问题
                  name: 'assets/[name].[ext]',
                  limit: 0,// 10kb以内的才转为base64
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
              }
            ]
          }
        ]
      }
    ]
  }
};

module.exports = merge(commonConfig, prodConfig);
