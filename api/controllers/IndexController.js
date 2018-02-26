const axios = require('axios')
const {SSR, sails} = global
axios.defaults.baseURL = 'http://localhost:' + sails.config.port // 전역 기본설정

module.exports = {
  html (req, res) {
    if (!SSR.renderer) return res.view('index', {ssr: false, initialState: '', style: ''})
    let context = {url: req.url}
    SSR.renderer.renderToString(context, function (err, html) {
      if (err) return res.notFound(err)
      res.view('index', {ssr: html || false, initialState: context.renderState(), style: context.renderStyles()})
    })
  },
  test (req, res) {
    res.json([1, 2, 3, 4, 5])
  }
}
