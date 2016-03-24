'use strict';
var gulp = require('gulp');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('build', function() {
    return browserify({
        entries: './src/main.js',
        debug: true,
        standalone: 'libname'
    })
    .transform(babelify, {
        presets: ['es2015']
    })
    .external([])
    .bundle()
    .pipe(source('main.js'))
    .pipe(rename('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});