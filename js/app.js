var guruzleApp = angular.module('guruzleApp', ['ngRoute','guruzleControllers']);

guruzleApp.config(function($routeProvider, $locationProvider){
    $routeProvider.
        when('/home', {templateUrl: 'pages/home.html', controller: 'homeCtrl'}).
        when('/team',{templateUrl: 'pages/team.html',controller: 'teamCtrl'}).
        when('/players',{templateUrl: 'pages/players.html',controller: 'playersCtrl'}).
        otherwise({ redirectTo: '/home' });
});
