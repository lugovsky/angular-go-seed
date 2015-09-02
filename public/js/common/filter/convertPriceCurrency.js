/**
 * @author v.lugovksy
 * created on 02.09.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.common')
      .filter('convertPriceCurrency', convertPriceCurrency);

  convertPriceCurrency.$inject = ['currencyDropdownModel'];
  function convertPriceCurrency(currencyDropdownModel) {
    return function(input) {
      return input * currencyDropdownModel.selectedCurrency.rate;
    }
  }
})(angular);