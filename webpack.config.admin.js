const path = require('path')
const _ = require('lodash')
const webpack = require('webpack')
const baseConf = require('./webpack.config.base')
const hasProdArg = _.includes(process.argv, '-p')
if (hasProdArg) process.env.NODE_ENV = 'production'
module.exports = function ({build}) {
  let sourceMapFileNameTemplate = info => 'webpack:///' + info.resourcePath.replace(/\.vue$/, '.vue.html')
  let sourceMapFileNameDupTemplate = info => sourceMapFileNameTemplate(info) + info.query

  const prod = process.env.NODE_ENV === 'production'
  const clientConfig = () => {
    let config = Object.assign(baseConf('admin', {prod}), {
      entry: ['./admin/entry-client.js'],
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.tmp/public/admin'),
        publicPath: '/admin/',
        devtoolModuleFilenameTemplate: sourceMapFileNameTemplate,
        devtoolFallbackModuleFilenameTemplate: sourceMapFileNameDupTemplate,
      }
    })
    if (prod) {
      config.entry.unshift('babel-polyfill')
      config.module.rules.push({
        test: /\.js$/,
        include: config.module.rules[0].exclude,
        loader: 'babel-loader'
      })
    } else {
      config.devtool = 'source-map'
      if (!build) {
        config.entry.unshift('webpack-hot-middleware/client?name=admin')
        config.plugins.push(...[new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()])
      }
    }
    return config
  }
  return clientConfig()
}
