/**
 * @author v.lugovksy
 * created on 02.09.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.common')
      .filter('wrapHighlightToken', wrapHighlightToken);

  wrapHighlightToken.$inject = ['$sce'];
  function wrapHighlightToken($sce) {
    return function(input, token) {
      if (token) {
        return $sce.trustAsHtml(
            input.replace(new RegExp(token, 'gi'), function(replace) { return '<span class="highlight">' + replace + '</span>'})
        );
      } else {
        return $sce.trustAsHtml(input);
      }
    }
  }
})(angular);