'use strict';

var gulp = require('gulp');

gulp.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e'
};

require('require-dir')('./gulp');

gulp.task('buildlocal', ['clean'], function () {
    gulp.env = 'local';
    gulp.start('buildapp-local');
});

gulp.task('builddev', ['clean'], function () {
    gulp.env = 'staging';
    gulp.start('buildapp');
});

gulp.task('buildprod', ['clean'], function () {
    gulp.env = 'production';
    gulp.start('buildapp');
});
