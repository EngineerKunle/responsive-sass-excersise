var timer = require("grunt-timer");

module.exports = function(grunt) {

    timer.init(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),



        /*============================================================
      Notifications for tasks
    ============================================================*/

        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5, // maximum number of notifications from jshint output
                title: "" // defaults to the name in package.json, or will use project directory's name
            },
            watch: {
                options: {
                    title: 'Task Complete', // optional
                    message: 'Watch completed succesfully', //required
                }
            }
        },


        /*============================================================
      Watch
    ============================================================*/

        watch: {
            sass: {
                files: ['scss/**/*'],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    livereload: false,
                }
            }
        },



        /*============================================================
      Auto prefixer
    ============================================================*/

        autoprefixer: {
            default: {
                src: 'assets/css/app.css',
                dest: 'assets/css/app.css'
            }
        },




        sass: {
            dist: {
                files: {
                    'assets/css/app.css': 'scss/app.scss'
                }
            }
        }

    });



    /*============================================================
    Plugins
  ============================================================*/

    grunt.loadNpmTasks('grunt-notify'); // notifications for tasks
    grunt.loadNpmTasks('grunt-contrib-watch'); // watch task
    grunt.loadNpmTasks('grunt-autoprefixer'); // Auto prefix css
    grunt.loadNpmTasks('grunt-contrib-sass'); // SASS



    // Default task(s).
    grunt.registerTask('default', ['notify_hooks:watch', 'sass',
        'autoprefixer', 'watch',
    ]);


};