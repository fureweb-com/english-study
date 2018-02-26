import Vue from 'vue'

Vue.directive('ripple', {
  bind (el, binding) {
    if (binding.value === false) return
    let div = document.createElement('div')
    div.setAttribute('class', 'rippleJS')
    el.appendChild(div)
  }
})
