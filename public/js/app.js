// Declare app level module which depends on filters, and services

(function(angular) {
  'use strict';

  angular.module('angularGoSeed', [

      // Bower dependencies
      'ui.router',
      'ui.bootstrap',

      // Common modules

      // App modules
      'angularGoSeed.common',
      'angularGoSeed.home'

  ])
      .config(appConfig)
      .run(appRun);

  appConfig.$inject = ['$urlRouterProvider'];
  function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

  appRun.$inject = ['searchBarModel'];
  function appRun() {
    // Do nothing. Inject search bar model to initialize search behavior
  }

})(angular);
