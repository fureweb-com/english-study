const path = require('path')
const webpack = require('webpack')
module.exports = function (name, env = {}) {
  return {
    name,
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, name),
          exclude: [
            /\.pure\.js$/,
            path.resolve(__dirname, `${name}/boot.js`),
            path.resolve(__dirname, `${name}/entry-client.js`),
            path.resolve(__dirname, `${name}/entry-server.js`),
            path.resolve(__dirname, `${name}/store`),
            path.resolve(__dirname, `${name}/workers`)
          ],
          loader: 'vuejs-loader'
        },
        {test: /\.pure\.js$/, loader: 'babel-loader'},
        {test: /\.css$/, loader: 'vue-style-loader!css-loader'},
        {test: /\.(png|woff|woff2|eot|ttf|svg|jpg|otf|gif)$/, loader: 'file-loader?outputPath=files/'}
      ]
    },
    plugins: [new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash'
    })],
    resolve: {
      alias: {
        '@util': path.resolve(__dirname, `${name}/util`),
        '@libs': path.resolve(__dirname, `${name}/libs`),
        '@common': path.resolve(__dirname, `${name}/common`),
        '@mixins': path.resolve(__dirname, `${name}/mixins`),
        '@workers': path.resolve(__dirname, `${name}/workers`),
        '@store': path.resolve(__dirname, `${name}/store`),
        '~': path.resolve(__dirname, `${name}`)
      }
    }
  }
}
