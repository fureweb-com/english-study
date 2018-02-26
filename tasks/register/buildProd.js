module.exports = function (grunt) {
  grunt.registerTask('buildProd', [
    'prod',
    'clean:build',
    'copy:build'
  ])
}
