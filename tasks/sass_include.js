/*
 * grunt-sass-include
 * https://github.com/jchn/grunt-sass-include
 *
 * Copyright (c) 2014 John van de Water
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sass_include', 'Include sass files into a single file, so you can dynamically import new files', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    var fileContents = ["// The file that imports all the dynamic stuff"];

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        return filepath;
      });

      src.forEach(function(filepath) {

        grunt.log.writeln("dest: " + f.dest);

        // TODO: clean this up
        var path = filepath.slice(0, -5).split("/");
        var file = path[path.length-1];
        if(file[0] === '_') {
          file = file.substr(1);
        }
        path[path.length-1] = file;
        path = path.join("/");

        var ext = f.dest.substr(-4, 4);

        switch(ext) {
          case "sass":
            fileContents.push('@import "' + path + '"');
          break;
          case "scss":
            fileContents.push('@import "' + path + '";');
          break;
        }

      });

      // Handle options.
      src += options.punctuation;

      fileContents = fileContents.join('\n');

      // Write the destination file.
      grunt.file.write(f.dest, fileContents);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
