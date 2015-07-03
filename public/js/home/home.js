(function(angular) {
  'use strict';

  angular.module('angularGoSeed.home', ['angularGoSeed.model'])
      .config(homeConfig)
      .controller('HomeCtrl', HomeCtrl);

  homeConfig.$inject = ['$stateProvider'];
  function homeConfig($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'js/home/home.html',
      controller: 'HomeCtrl'
    });
  }

  HomeCtrl.$inject = ['$scope', 'books'];
  function HomeCtrl($scope, books) {
    $scope.books = [];

    books.getAll().then(function(data) {
      $scope.books = data;
    });
  }

})(angular);