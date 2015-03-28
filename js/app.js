var guruzleApp = angular.module("guruzleApp", ['ngRoute','guruzleControllers']);

guruzleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'mainCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);