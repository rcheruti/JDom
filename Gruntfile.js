
module.exports = function (grunt) {
  
  var phantomjs = require('grunt-lib-phantomjs').init(grunt);
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  var src = 'public_html/',
      dist = 'dist/';
  
  grunt.initConfig({
    
  });
  
  
  grunt.registerTask('default',function(){
    // Create some kind of "all done" event.
    phantomjs.on('default.done', function() {
      phantomjs.halt();
    });
    // This task is async.
    var done = this.async();
    // Spawn phantomjs
    phantomjs.spawn(src+'index.html', {
      // Additional PhantomJS options.
      options: {},
      done: function(err) {
        done(true);
      }
    });
  });
  
};
