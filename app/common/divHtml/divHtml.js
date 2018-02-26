export default {
  name: 'div-html',
  props: ['html'],
  computed: {
    content () {
      return this.html
    }
  },
  templateSrc: './divHtml.html'
}
