import { boot } from './boot'

export default function (context) {
  return new Promise((resolve, reject) => {
    let {app, router, store} = boot()
    if (context.url) router.push(context.url)
    router.onReady(function () {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) return reject({code: 404})
      Promise.all(matchedComponents.map(x => x.asyncData && x.asyncData({store}))).then(x => {
        context.state = store.state
        resolve(app)
      }, reject)
    }, reject)
  })
}
