// Declare app level module which depends on filters, and services

(function(angular) {
  'use strict';

  angular.module('angularGoSeed', [

      // Bower dependencies
      'ui.router',
      'ui.bootstrap',

      // Common modules

      // App modules
      'angularGoSeed.home'

  ])
      .config(appConfig);

  appConfig.$inject = ['$urlRouterProvider'];
  function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})(angular);
