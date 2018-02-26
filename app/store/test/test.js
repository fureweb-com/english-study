export default function (req2svr) {
  return {
    state: {
      data: []
    },
    mutations: {
      'test.data[set]' (state, data) {
        state.data = data
      }
    },
    actions: {
      'test.data[fetch]' (context) {
        return req2svr.test().then(r => context.commit('test.data[set]', r))
      }
    }
  }
}
