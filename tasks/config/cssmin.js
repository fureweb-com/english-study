module.exports = function (grunt) {
  grunt.config.set('cssmin', {
    index_dist: {
      src: ['.tmp/intermediate/index/production_index.css'],
      dest: '.tmp/public/css/index/production_index.min.css'
    },
    admin_dist: {
      src: ['.tmp/intermediate/admin/production_admin.css'],
      dest: '.tmp/public/css/admin/production_admin.min.css'
    }
  })

  grunt.loadNpmTasks('grunt-contrib-cssmin')
}
