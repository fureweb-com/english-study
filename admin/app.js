import test from '~/util/test'

export default {
  name: 'app',
  mounted () {
    console.log(test.a)
  },
  // provide: {util},
  templateSrc: './app.html'
}
