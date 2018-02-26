import _ from 'lodash'
import req2svr from './req2svr'

export default {
  name: 'search',
  inject: [],
  props: [],
  computed: {
    req2svr: () => req2svr
  },
  data() {
    return {
      phrase: '',
      from: 'kor',
      dest: 'eng',
      language: 'kor',
      result: []
    }
  },
  methods: {
    translate() {
      this.req2svr.translate({ from: this.from, dest: this.dest, phrase: this.phrase }).then(r => {
        let wordsCount = 0
        let meaningList
        this.result = []
        _.forEach(r, item => {
          if (item.phrase && item.phrase.text) {
            this.result.push(item.phrase)

            meaningList = []
            _.forEach(item.meanings, meaning => {
              meaningList.push(meaning.text)
            })
            console.log(`${item.phrase.text}`)
            wordsCount++
          }
        })
        if (!wordsCount) console.log(`죄송합니다. '${this.phrase}'에 대한 번역 결과가 없습니다.\n\n`)
        else console.log(`총 ${wordsCount}건의 번역 결과가 있습니다.\n\n`)
      })
    }
  },
  watch: {
    language(val) {
      if (val === 'eng') {
        this.from = 'eng'
        this.dest = 'kor'
      } else if (val === 'kor') {
        this.from = 'kor'
        this.dest = 'eng'
      } else { }
    }
  },
  templateSrc: './search.html'
}
