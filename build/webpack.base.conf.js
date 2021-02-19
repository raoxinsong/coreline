var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
require("babel-polyfill");
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var webpackConfig = {
  entry: {
    app:  ['babel-polyfill','./src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'static': resolve('static'),
      'muse-components': 'muse-ui/src',
      '@api': resolve('src/api/')
    }
  },
  externals: {
    'AMap': 'AMap',
    'AMapUI': 'AMapUI'
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('/node_modules/swiper'),resolve('/node_modules/element-ui/src'),resolve('/node_modules/element-ui/packages')],
        options: {
            presets: ['es2015']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
module.exports  = webpackConfig
// const vuxLoader = require('vux-loader')
// module.exports = vuxLoader.merge(webpackConfig, {
//   plugins: [
//     {name: 'vux-ui'},
//     {
//       name: 'duplicate-style'
//     }
//   ]
// })