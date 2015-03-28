var guruzleApp = angular.module('guruzleApp',[])

guruzleApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	}).
	when('/about',{
		templateUrl : 'pages/about.html',
		controller :  'aboutController'
	});
}]);
//Controllers
guruzleApp.controller('mainController', function($scope){
	$scope.brand="Guruzle";
	$scope.message="I am guruzle";
});
guruzleApp.controller('aboutController',function($scope){
	$scope.message="About guruzle";
});