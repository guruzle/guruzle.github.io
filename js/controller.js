var guruzleControllers = angular.module('guruzleControllers', []);

guruzleControllers.controller('homeCtrl', ['$scope', '$http',
  function ($scope, $http) {
    // $http.get('phones/phones.json').success(function(data) {
      // $scope.phones = data;
    // });
	$scope.brand = 'Guruzle';
	$scope.message = 'Welcome to Guruzle';
    // $scope.orderProp = 'age';
  }]);