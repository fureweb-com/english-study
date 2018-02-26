const path = require('path')
const _ = require('lodash')
// const packageJson = require('./package.json')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const webpack = require('webpack')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')
const hasProdArg = _.includes(process.argv, '-p')
const baseConf = require('./webpack.config.base')
if (hasProdArg) process.env.NODE_ENV = 'production'
const adminConfig = require('./webpack.config.admin')
module.exports = function ({build} = {}) {
  let sourceMapFileNameTemplate = info => 'webpack:///' + info.resourcePath.replace(/\.vue$/, '.vue.html')
  let sourceMapFileNameDupTemplate = info => sourceMapFileNameTemplate(info) + info.query

  const prod = process.env.NODE_ENV === 'production'
  const clientConfig = () => {
    let config = Object.assign(baseConf('app', {prod}), {
      entry: ['./app/entry-client.js'],
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.tmp/public/'),
        publicPath: '/',
        devtoolModuleFilenameTemplate: sourceMapFileNameTemplate,
        devtoolFallbackModuleFilenameTemplate: sourceMapFileNameDupTemplate
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
        config.entry.unshift('webpack-hot-middleware/client?name=app')
        config.plugins.push(...[new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()])
      }
    }
    return config
  }

  const serverConfig = () => {
    let config = Object.assign(baseConf('app', {prod}), {
      entry: ['./app/entry-server.js'],
      target: 'node',
      externals: nodeExternals({whitelist: /\.css$/}),
      output: {
        filename: 'bundle-server.js',
        path: path.resolve(__dirname, '.tmp'),
        libraryTarget: 'commonjs2'
      }
    })
    config.plugins.push(new VueSSRServerPlugin())
    config.entry.unshift('babel-polyfill')
    config.module.rules.push({
      test: /\.js$/,
      include: config.module.rules[0].exclude,
      loader: 'babel-loader'
    })
    return config
  }
  let ret = prod ? [serverConfig(), clientConfig()] : [clientConfig()]
  return [...ret, adminConfig({build})]
}

// function precache (opt) {
//   opt.plugins.push(new SWPrecacheWebpackPlugin({
//     cacheId: packageJson.name + '-' + packageJson.version,
//     filename: 'service-worker.js',
//     minify: false,
//     runtimeCaching: [{urlPattern: '/', handler: 'cacheFirst'}],
//     staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/, /\.hot-update\.js$/],
//   }))
// }
