/**
 * @author v.lugovksy
 * created on 02.09.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.common')
      .factory('currencyDropdownModel', currencyDropdownModel);

  currencyDropdownModel.$inject = ['currency', '$rootScope'];
  function currencyDropdownModel(currency, $rootScope) {
    var USD_CURRENCY = { currency: 'USD', rate: 1};

    var model = {
      selectedCurrency: USD_CURRENCY,
      items: [USD_CURRENCY]
    };

    currency.getAll()
        .then(function(data) {
          model.items = Object.keys(data.rates)
              .map(function(currency) { return { currency: currency, rate: data.rates[currency] }; });
          model.items.unshift(USD_CURRENCY);
        });

    $rootScope.$currencyDropdownModel = model;

    return model;
  }
})(angular);