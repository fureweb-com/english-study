import app from './app'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import baseStore from './store/store'
import VueProgressBar from 'vue-progressbar'
import _ from 'lodash'
import { lodashMixin } from './util/util.pure'

_.mixin(lodashMixin)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

export function boot () {
  let router = new VueRouter({routes, mode: 'history'})
  let store = new Vuex.Store(baseStore())
  return {
    app: new Vue({
      router,
      store,
      beforeMount () {
        Vue.root = this
        Vue.store = this.$store
      },
      render: h => h(app)
    }),
    router,
    store
  }
}
