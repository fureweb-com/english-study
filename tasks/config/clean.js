/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */
module.exports = function (grunt) {
  grunt.config.set('clean', {
    tmp: ['.tmp/**'],
    build: ['www'],
    intermediate: ['.tmp/intermediate/**']
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
}
