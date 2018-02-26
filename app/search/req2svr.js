import axios from 'axios'

export default {
  translate (params) {
    return axios.get('/translate', {params}).then(x => {
      return x.data
    })
  }
}
