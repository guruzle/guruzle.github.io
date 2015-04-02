var guruzleControllers = angular.module('guruzleControllers', []);

guruzleControllers.controller('homeCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
      // $scope.phones = data;
    // });
	$scope.brand = 'Guruzle';
	$scope.message = 'Welcome to Guruzle - Home';
	$scope.isActive = function (viewLocation) {return viewLocation === $location.path();}
  }]);

guruzleControllers.controller('teamCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
      // $scope.phones = data;
    // });
	$scope.brand = 'Guruzle - Team';
	$scope.message = 'Welcome to Guruzle - Team';
    // $scope.orderProp = 'age';
  }]);

guruzleControllers.controller('playersCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
      // $scope.phones = data;
    // });
	$scope.brand = 'Guruzle - Players';
	$scope.message = 'Welcome to Guruzle - Players';
    // $scope.orderProp = 'age';
  }]);

guruzleControllers.controller('loginCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
      // $scope.phones = data;
    // });
	$scope.brand = 'Guruzle - Login';
	$scope.message = 'Welcome to Guruzle - Login';
    // $scope.orderProp = 'age';
  }]);