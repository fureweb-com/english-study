import { boot } from './boot'

let {app, store, router} = boot()
router.beforeResolve((to, from, next) => {
  const matched = router.getMatchedComponents(to)
  const prevMatched = router.getMatchedComponents(from)
  let diffed = false
  const activated = matched.filter((c, i) => diffed || (diffed = (prevMatched[i] !== c)))
  const asyncData = activated.filter(x => x.asyncData).map(x => x.asyncData({store}))
  if (!asyncData.length) return next()
  app.$Progress.start()
  let finish = () => app.$Progress.finish()
  Promise.all(asyncData).then(finish, finish).then(next)
})

if (window.__INITIAL_STATE__) store.replaceState(window.__INITIAL_STATE__) // 서버에서 이미 가져온경우 실행안함
else {
  router.onReady(function () {
    const activated = router.getMatchedComponents()
    const asyncData = activated.filter(x => x.asyncData).map(x => x.asyncData({store}))
    if (!asyncData.length) return
    app.$Progress.start()
    let finish = () => app.$Progress.finish()
    Promise.all(asyncData).then(finish, finish)
  })
}
app.$mount('#app')
// if ('serviceWorker' in navigator)
//   navigator.serviceWorker.register('/service-worker.js')
