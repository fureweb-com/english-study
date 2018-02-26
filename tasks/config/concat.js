
module.exports = function (grunt) {
  grunt.config.set('concat', {
    options: {
      seperator: ';'
    },
    index_js: {
      src: require('../pipeline').index_jsFilesToInject,
      dest: '.tmp/intermediate/index/production_index.js'
    },
    index_css: {
      src: require('../pipeline').index_cssFilesToInject,
      dest: '.tmp/intermediate/index/production_index.css'
    },
    admin_js: {
      src: require('../pipeline').admin_jsFilesToInject,
      dest: '.tmp/intermediate/admin/production_admin.js'
    },
    admin_css: {
      src: require('../pipeline').admin_cssFilesToInject,
      dest: '.tmp/intermediate/admin/production_admin.css'
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
}
