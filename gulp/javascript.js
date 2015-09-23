/**
 * @author v.lugovksy
 * created on 18.09.2015
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');
var minifyHTML = require('gulp-minify-html');
var lib = require('bower-files')();

var u = require('./_util');

gulp.task('template-cache', function() {
  return gulp
      .src('public/js/**/*.html')
      .pipe(minifyHTML())
      .pipe(templateCache({ root: 'js/', module: 'angularGoSeed' }))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('concat-app-js-files', function(done) {
  u.getSortedAppJsFilesForBuild(function(files) {
    gulp.src(files)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .on('end', done);
  });
});

gulp.task('build-app-js', ['template-cache', 'concat-app-js-files'], function() {
  return gulp
      .src(['dist/js/app.js', 'dist/js/templates.js'])
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('build-vendor-js', function () {
  return gulp.src(lib.ext('js').files)
      .pipe(concat('vendor.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('build-js', ['build-app-js', 'build-vendor-js']);
