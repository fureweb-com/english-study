module.exports = function (grunt) {
  grunt.config.set('exec', {
    webpack: {
      cmd: `"node_modules/.bin/webpack"`
    },
    webpack_build_dev:{
      cmd: `"node_modules/.bin/webpack" --env.build`
    },
    webpack_prod:{
      cmd: `"node_modules/.bin/webpack" -p`
    },
    webpack_watch: {
      cmd: `"node_modules/.bin/webpack" -w`
    }
  })

  grunt.loadNpmTasks('grunt-exec')
}
