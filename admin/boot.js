import app from './app'
import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
// import baseStore from './store/store'
Vue.use(VueRouter)
// Vue.use(Vuex)

export function boot () {
  let router = new VueRouter({routes, mode: 'history'})
  // let store = new Vuex.Store(baseStore())
  // return {app: new Vue({router, store, render: h => h(app)}), router, store,}
  return {app: new Vue({router, render: h => h(app)}), router}
}
