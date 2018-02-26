let baseConf = require('./karma.conf.base')
module.exports = function (config) {
  baseConf('admin')(config)
}
