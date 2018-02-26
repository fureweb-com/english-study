import popupMixin from './mixins/popupMixin'
import './common.css'
import Vue from 'vue'

export default {
  name: 'app',
  data () { return {test: 1} },
  mixins: [popupMixin],
  beforeMount () {
    Vue.app = this
  },
  provide () {
    return {
      popup: this.popup
    }
  },
  templateSrc: './app.html',
  styleSrc: './app.css' // 컴포넌트에 스타일이 있어야 import './common.css'가 SSR에서 들어감
}
