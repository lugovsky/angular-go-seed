/**
 * @author v.lugovksy
 * created on 29.08.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.common')
      .filter('imagePath', imagePath);

  imagePath.$inject = [];
  function imagePath() {
    return function(input) {
      return 'img/' + input;
    };
  }
})(angular);