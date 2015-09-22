/**
 * @author v.lugovksy
 * created on 06.09.2015
 */

var gulp = require('gulp');
var through = require('through2');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

var u = require('./_util');


gulp.task('compileIndex', function(done) {
  u.getSortedAppJsFiles(function(libFiles) {
    gulp.src('./public/index.hbs')
        .pipe(handlebars({ appJs: libFiles, vendorJs: u.getSortedLibJsFiles() }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./public'))
        .on('end', done);
  });
});
