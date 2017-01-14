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
    gulp.paths.googleMapKey = 'AIzaSyCL-mduxahO1neIBX2HYWduSitYKgkULUk';
    gulp.paths.mapApiKey = 'AIzaSyBmjWgtryGkDDWoVgGIHJ5MM_QZDLCJ9kI';
    gulp.paths.zomatoApiKey = '00c4ef8fd362359559f9322de537fb35';
    gulp.env = 'local';
    gulp.start('buildapp-local');
});

gulp.task('builddev', ['clean'], function () {
    gulp.paths.googleMapKey = 'AIzaSyCL-mduxahO1neIBX2HYWduSitYKgkULUk';
    gulp.paths.mapApiKey = 'AIzaSyBmjWgtryGkDDWoVgGIHJ5MM_QZDLCJ9kI';
    gulp.paths.zomatoApiKey = '00c4ef8fd362359559f9322de537fb35';
    gulp.env = 'staging';
    gulp.start('buildapp');
});

gulp.task('buildprod', ['clean'], function () {
    gulp.paths.googleMapKey = 'AIzaSyCL-mduxahO1neIBX2HYWduSitYKgkULUk';
    gulp.paths.mapApiKey = 'AIzaSyBmjWgtryGkDDWoVgGIHJ5MM_QZDLCJ9kI';
    gulp.paths.zomatoApiKey = '00c4ef8fd362359559f9322de537fb35';
    gulp.env = 'production';
    gulp.start('buildapp');
});
