/**
 * @author v.lugovksy
 * created on 02.09.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.common')
      .filter('convertPriceCurrency', convertPriceCurrency);

  convertPriceCurrency.$inject = [];
  function convertPriceCurrency() {
    return function(input, selectedCurrency) {
      return input * selectedCurrency.rate;
    }
  }
})(angular);