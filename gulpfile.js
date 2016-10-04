'use strict';

var browserSync = require('browser-sync').create(),
    fs          = require('fs'),
    gulp        = require('gulp'),
    webpack     = require('webpack'),
    gulpWebpack = require('gulp-webpack');

gulp.task('compile', function() {
    var config = require('./webpack-config');	
    return gulp.src('public/main.ts')
            .pipe(gulpWebpack(config, webpack)).pipe(gulp.dest('./dist/'));
    });


gulp.task('watch', function (cb) {
    browserSync.init({
        server: './dist',
        index: 'index.html',
        ghostMode: false
    });

    gulp.watch('dist/**.js').on('change', browserSync.reload);
    gulp.watch('dist/**.html').on('change', browserSync.reload);
});