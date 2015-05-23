// Generated on 2015-05-23 using generator-bootstrap-less 3.2.1
'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      less: {
        files: [
          '<%= yeoman.app %>/less/{,*/}*.less',
          '<%= yeoman.app %>/less/**/{,*/}*.less'],
        tasks: [
          'less',
          'autoprefixer:server',
          'copy:server'
        ]
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'demo/index.html',
          '{.tmp,<%= yeoman.app %>}/css/{,*/}*.css'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            'demo'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/*',
              '!<%= yeoman.dist %>/.git*'
            ]
          }
        ]
      },
      server: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.app %>/css/*',
              'demo/assets/utility.css'
            ]
          }
        ]
      }
    },
    less: {
      server: {
        files: {
          '<%= yeoman.app %>/css/utility.css': ['<%= yeoman.app %>/less/utility.less']
        }
      },
      dist: {
        files: {
          '<%= yeoman.dist %>/utility.css': ['<%= yeoman.app %>/less/utility.less']
        },
        options: {
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.dist %>/utility.css.map',
          sourceMapBasepath: '<%= yeoman.dist %>/',
          sourceMapRootpath: '/'
        }
      }
    },
    cssmin: {
      dist: {
        files: [
          {
            expand: true,
            src: ['<%= yeoman.dist %>/*.css'],
            ext: '.min.css'
          }
        ]
      }
    },
    copy: {
      server: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= yeoman.app %>/css/utility.css'],
            dest: 'demo/assets'
          }
        ]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions'],
        safe: true
      },
      server: {
        src: '<%= yeoman.app %>/css/utility.css',
        dest: '<%= yeoman.app %>/css/utility.css'
      },
      dist: {
        options: {
          diff: '<%= yeoman.dist %>/utility.css.autoprefixer'
        },
        src: '<%= yeoman.dist %>/utility.css',
        dest: '<%= yeoman.dist %>/utility.css'
      }
    },
    add_comment: {
      options: {
        comments: [
          'Utility.css - Just add it!',
          'Built using the most awesome features I found on the internet, credits are given to their',
          'respective owners. Check all the features & usage at http://fgarci03.github.io/utilitycss',
          '@author: - Filipe Garcia (http://github.com/fgarci03)',
          '@copyright:  MIT (http://opensource.org/licenses/MIT)'
        ],
        syntaxes: {
          '.css': ['/*', '*/']
        }
      },
      dist: {
        files: [{
          flatten: true,
          expand: true,
          src: ['<%= yeoman.dist %>/utility.min.css'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'less:server',
      'autoprefixer:server',
      'copy:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'less:dist',
    'autoprefixer:dist',
    'cssmin:dist',
    'add_comment:dist'
  ]);

  grunt.registerTask('default', ['build', 'serve']);
};
