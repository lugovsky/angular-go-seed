/**
 * @author v.lugovksy
 * created on 18.09.2015
 */

var glob = require('glob');
var S = require('underscore.string');
var lib = require('bower-files')().relative();

exports.getSortedLibJsFiles = function() {
  return lib.ext('js').files.map(function(f) { return f.replace(/\\/g, '/').replace('public/', ''); });
};

exports.getSortedAppJsFiles = function(cb) {
  glob('js/**/*.js', { cwd: './public' }, function(err, appJsFiles) {
    appJsFiles = appJsFiles.sort(function(file1, file2) {
      function _getOrder(name) {
        return S.endsWith(name, '.module.js') ? -1 : 0;
      }
      return _getOrder(file1) - _getOrder(file2);
    }).map(function(f) { return f.indexOf('./') === 0 ? f.replace('./', '') : f; });

    cb(appJsFiles);
  });
};