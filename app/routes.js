import search from './search/search.js'

export default [
  {name: 'search', path: '/search', component: search},
  {path: '/', redirect: '/search'}
]
