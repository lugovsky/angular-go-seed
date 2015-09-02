/**
 * @author v.lugovksy
 * created on 02.09.2015
 */
(function (angular) {
  'use strict';

  angular.module('angularGoSeed.common')
      .factory('searchBarModel', searchBarModel);

  searchBarModel.$inject = ['$rootScope'];
  function searchBarModel($rootScope) {
    var model = {
      searchString: '',
      filterString: filterString,
      filterObject: filterObject
    };

    $rootScope.$searchBarModel = model;

    return model;

    function filterString(input) {
      return input && (typeof input === 'string') && input.indexOf(model.searchString) !== -1;
    }

    function filterObject(obj) {
      return Object.keys(obj).some(function(propName) {
        return model.filterString(obj[propName]);
      });
    }
  }
})(angular);