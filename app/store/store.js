import test from './test/test'
import testReq2svr from './test/req2svr'

export default function () {
  return {
    modules: {test: test(testReq2svr)},
    state: {},
    actions: {},
    mutations: {}
  }
}
