var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['browser-sync', 'compileIndex', 'styles', 'watch']);