/**
 * @author v.lugovksy
 * created on 05.09.2015
 */

var gulp   = require('gulp');
var concat = require('gulp-concat');
var lib    = require('bower-files')();
var sass   = require('gulp-sass');

gulp.task('vendorCss', function () {
  return gulp.src(lib.ext('css').files)
      .pipe(concat('vendor.min.css'))
      .pipe(gulp.dest('public/css'));
});

gulp.task('appCss', function(done) {
  gulp.src("./public/sass/app.scss")
      .pipe(sass({
        includePaths: ["./public/sass"],
        noCache : true,
        style   : "compact",
        errLogToConsole: true
      }))
      .on('error', function(error) {
        console.error(error);
        this.emit('end')
      })
      .pipe(gulp.dest("./public/css"))
      .on("end", done);
});

gulp.task('styles', ['vendorCss', 'appCss']);