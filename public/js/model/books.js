(function(angular) {
  angular.module('angularGoSeed.model')
      .service('books', booksService);

  booksService.$inject = ['$http', 'appConfig', 'appUtil'];
  function booksService($http, appConfig, appUtil) {
    this.getAll = function() {
      return appUtil.httpResultToPromise($http.get(appConfig.api.endpoint + '/books'));
    };
  }
})(angular);