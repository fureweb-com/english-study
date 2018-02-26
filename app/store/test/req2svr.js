import axios from 'axios'

export default {
  test () {
    return axios.get('/test').then(x => x.data)
  }
}
