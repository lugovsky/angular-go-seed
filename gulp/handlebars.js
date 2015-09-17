/**
 * @author v.lugovksy
 * created on 06.09.2015
 */

var gulp = require('gulp');
var through = require('through2');
var glob = require('glob');
var S = require('underscore.string');
var lib    = require('bower-files')().relative();
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');


gulp.task('compileIndex', function(done) {
  glob('js/**/*.js', { cwd: './public' }, function(err, appJsFiles) {
    appJsFiles = appJsFiles.sort(function(file1, file2) {
      function _getOrder(name) {
        return S.endsWith(name, '.module.js') ? -1 : 0;
      }
      return _getOrder(file1) - _getOrder(file2);
    }).map(function(f) { return f.indexOf('./') === 0 ? f.replace('./', '') : f; });
    var libFiles = lib.ext('js').files.map(function(f) { return f.replace(/\\/g, '/').replace('public/', ''); });

    gulp.src('./public/index.hbs')
        .pipe(handlebars({ vendorJs: libFiles, appJs: appJsFiles }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'));

  });
});
