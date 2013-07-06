module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy_dir: {}                  
  });

  // Default task(s).
  grunt.registerTask('default', []);

  grunt.loadTasks('./');
};