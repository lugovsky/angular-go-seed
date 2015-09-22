var gulp   = require('gulp');
var reloadSources = ['public/js/**/*.js', 'public/css/**/*.css', 'public/**/*.html']


gulp.task('watch', [], function () {
  gulp.watch('public/sass/*.scss', ['styles']);
  gulp.watch('public/**/*.hbs', ['compileIndex']);
  reloadSources.forEach(function (source) {
    gulp.watch(source, ['reload']);
  })
});