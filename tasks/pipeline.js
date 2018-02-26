/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

let indexCssFilesToInject = [
  'css/index/**/*.css',
  'libs/ag-grid-12.0.2/styles/ag-grid.css'
]

let adminCssFilesToInject = [
  'css/admin/**/*.css'
]

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
let indexJsFilesToInject = [
  'js/test.js',
  'libs/ag-grid-12.0.2/ag-grid.noStyle.js'
]

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
let adminJsFilesToInject = []

// Angular Related Files

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
//  they reside in the first place)
module.exports.index_cssFilesToInject = indexCssFilesToInject.map(function (path) {
  return 'assets/' + path
})
module.exports.index_jsFilesToInject = indexJsFilesToInject.map(function (path) {
  return 'assets/' + path
})

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
//  they reside in the first place)
module.exports.admin_cssFilesToInject = adminCssFilesToInject.map(function (path) {
  return 'assets/' + path
})
module.exports.admin_jsFilesToInject = adminJsFilesToInject.map(function (path) {
  return 'assets/' + path
})
