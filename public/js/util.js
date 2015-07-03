(function(angular) {
  angular.module('angularGoSeed')
      .service('appUtil', appUtil);

  function appUtil() {
    this.httpResultToPromise = function(httpRes) {
      return httpRes.then(function(res) {
        return res.data;
      });
    }
  }
})(angular);