var guruzleControllers = angular.module('guruzleControllers', []);

guruzleControllers.controller('homeCtrl', ['$scope', '$http',
  function ($scope, $http) {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
      alert("Geolocation is not supported by this browser.");
  }
  function showPosition(position) {
    var loc = position.coords.latitude +   "," + position.coords.longitude; 
    
    $http.get('https://floating-tor-4011.herokuapp.com/twitter/' + loc).
      success(function(data, status, headers, config) {
        $scope.tweets = data;
      }).
      error(function(data, status, headers, config) {
        $scope.tweets = data;
      });
  }
	$scope.brand = 'Guruzle';
	$scope.message = 'Welcome to Guruzle - Home';
	$scope.isActive = function (viewLocation) {return viewLocation === $location.path();}
  }]);

