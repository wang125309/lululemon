var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var base64 = require('gulp-base64');
var css_minify = require('gulp-minify-css');
var browserify = require('gulp-browserify');

gulp.task('stylus',function(){
    gulp.src('./static/css-modify/*.styl')
        .pipe(stylus())
        .pipe(css_minify())
        .pipe(base64())
        .pipe(gulp.dest('./static/css'));
});

gulp.task('js',function(){
    gulp.src('./static/js-modify/*.js')
        .pipe(browserify())
        .pipe(concat('.js'))
        .pipe(gulp.dest('./static/js'))
        .pipe(rename(js_files[i]+'.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./static/js'));
});
