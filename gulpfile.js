'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); /* sourcemap in minified css */
var autoprefixer = require('gulp-autoprefixer'); /* automatic vendor prefixes */
var rename = require('gulp-rename') /* rename minified file */
var livereload = require('gulp-livereload'); /* reloads page in browser on changed CSS */

gulp.task('default', ['watch']);
gulp.task('build', ['watch']);

var sassInput = 'public/sass/*.scss';
var sassOutput = 'public/css/';

var sassExpandedOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded' /* normal CSS */
};

var sassMinifyedOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed' /* minified CSS */
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR'] /* Auto prefix using last 2 versions of browsers */
};

gulp.task('sass', function() {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassExpandedOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(sassOutput))
        .pipe(livereload());;
});

gulp.task('sass-minifyed', function() {
    return gulp
        .src(sassInput)
        .pipe(sourcemaps.init())
        .pipe(sass(sassMinifyedOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(sassOutput))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(sassInput, ['sass']);
    gulp.watch(sassInput, ['sass-minifyed']);
});

