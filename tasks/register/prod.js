module.exports = function (grunt) {
  grunt.registerTask('prod', [
    'clean:tmp',
    'clean:intermediate',
    'concat',
    'uglify',
    'cssmin',
    'clean:intermediate',
    'copy:prod',
    'copy:template',
    'exec:webpack_prod',
    'sails-linker:index_prodJs',
    'sails-linker:index_prodStyles',
    'sails-linker:admin_prodJs',
    'sails-linker:admin_prodStyles'
  ])
}
