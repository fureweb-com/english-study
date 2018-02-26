const path = require('path')
const fs = require('fs')
const {sails} = global
const {createBundleRenderer} = require('vue-server-renderer')
const jsonPath = path.posix.resolve('/' + path.win32.relative('c:\\', path.resolve('.tmp/vue-ssr-server-bundle.json')).replace(/\\/g, '/'))
const LRU = require('lru-cache')
let onLifted = new Promise(resolve => sails.on('lifted', resolve))
let ret = {renderer: null}

onLifted.then(function () {
  if (process.env.NODE_ENV !== 'production' || !fs.existsSync(jsonPath)) return
  ret.renderer = createBundleRenderer(jsonPath, {
    runInNewContext: false,
    cache: LRU({
      max: 10000,
      maxAge: 1000 * 60 * 60
    })
  })
})
module.exports = ret
