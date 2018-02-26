import * as _ from 'lodash'

export default function CamelCase (o) {
  if (o === undefined || o === null) return o
  if (_.isArrayLikeObject(o)) return _.map(o, CamelCase)
  if (!_.isDate(o) && _.isObjectLike(o)) return _(o).mapKeys((v, k) => _.camelCase(k)).mapValues(CamelCase).value()
  return o
}
