/**
 * @author v.lugovksy
 * created on 12.08.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.model')
      .service('currency', currency);

  currency.$inject = ['$http', 'appConfig', 'appUtil'];
  function currency($http, appConfig, appUtil) {

    this.getAll = function() {
      return appUtil.httpResultToPromise($http.get(appConfig.api.endpoint + '/currencies'));
    };

  }
})(angular);