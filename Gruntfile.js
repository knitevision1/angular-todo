module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            dist: {
                files: {
                    'app/assets/css/app.css': 'sources/sass/app.scss',
                }
            }
        },

        // less: {
        //     dist: {
        //         files: {
        //             'build/css/selecter.css': 'sources/less/selecter.less',
        //             'build/css/checkbox.css': 'sources/less/checkbox.less',
        //             'build/css/scrollbar.css': 'sources/less/scrollbar.less',
        //         }
        //     }
        // },

        watch: {
            css: {
                files: ['sources/sass/*', 'app/assets/css/app.css'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
            }
        },

        autoprefixer: {
            sourcemap: {
                options: {
                    map: true
                },
                src: 'app/assets/css/app.css',
                dest: 'app/assets/css/app-prefixed.css'
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'app/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/assets/css',
                    ext: '.min.css'
                }]
            },
            options: {
                sourceMap: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass', 'watch']);
}
