module.exports = function (grunt) {
  grunt.config.set('uglify', {
    index_dist: {
      src: ['.tmp/intermediate/index/production_index.js'],
      dest: '.tmp/public/js/production_index.min.js'
    },
    admin_dist: {
      src: ['.tmp/intermediate/admin/production_admin.js'],
      dest: '.tmp/public/js/production_admin.min.js'
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
}
