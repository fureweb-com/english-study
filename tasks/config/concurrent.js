module.exports = function (grunt) {
  grunt.config.set('concurrent', {
    watch: ['watch', 'exec:webpack_watch']
  })

  grunt.loadNpmTasks('grunt-concurrent')
}
