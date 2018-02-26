module.exports = function (grunt) {
  grunt.registerTask('build', [
    'clean:tmp',
    'copy:dev',
    'copy:template',
    'sails-linker:index_devJs',
    'sails-linker:index_devStyles',
    'sails-linker:admin_devJs',
    'sails-linker:admin_devStyles',
    'exec:webpack_build_dev',
    'clean:build',
    'copy:build'
  ])
}
