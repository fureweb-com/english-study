import Vue from 'vue'
import $ from 'jquery'
import { Deferred } from '~/util/Deferred.pure'

function Popup (vm) {
  this.skipOpen = false
  Object.defineProperties(this, {
    'app': {value: vm},
    'store': {value: vm.$store}
  })
}

Popup.prototype.open = function (option, propsData, parent, beforeAnchor) {
  let deferred = new Deferred()
  let component
  if (!parent) parent = Vue.app
  let promise = Promise.resolve()
  let Vm = typeof option === 'string' ? Vue.component(option) : Vue.extend(option)
  component = deferred.promise.vm = new Vm({propsData, parent})
  if (component.$options.beforePopup) { // beforePopup 훅을 가지고 있을 경우 done을 할때까지 팝업을 띄우지 않음
    promise = new Promise((resolve, reject) => {
      component.$options.beforePopup.call(component, function done (tf, reason) {
        tf === false ? reject(reason) : resolve() // false인 경우 팝업 띄우지 않음
      })
    })
  }
  promise.then(() => {
    component.$on('close', function (ret, res) {
      if (arguments.length > 1) ret ? deferred.resolve(res) : deferred.reject(res)
      else deferred.resolve(ret)
      component.$el && component.$el.remove()
      component.$destroy()
    })
    if (beforeAnchor || parent === Vue.app) $('#popup_anchor').before(component.$mount().$el)
    else $(parent.$el).append(component.$mount().$el)
  }, reason => {
    component.$destroy()
    deferred.reject(reason)
  })
  return deferred.promise
}

// 루트(앱) 컴포넌트에서 한번만 mixin
export default {
  beforeCreate () {
    this.$popup = new Popup(this)
  },
  mounted () {
    Vue.popup = this.$popup
  },
  computed: {
    popup () { return this.$popup }
  }
}
