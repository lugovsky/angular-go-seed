var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: "localhost:3000"
  });
});

gulp.task('reload', function () {
  browserSync.reload();
});