var guruzleControllers = angular.module('guruzleControllers', []);

guruzleControllers.controller('homeCtrl', ['$scope', '$http',
  function ($scope, $http) {
   $scope.filterText = '';
   $scope.address = 'guruzling new you ....';
   loadTwitter();
  function loadTwitter(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(usePosition,failPosition,{timeout:5000});
    } else { 
        alert("Geolocation is not supported by this browser.");
    }    
  }
  function usePosition(position) {
    var loc = position.coords.latitude +   "," + position.coords.longitude; 
    getFilteredTweets(loc);
    getSearchAddressFromGeo(loc);
  }
  function failPosition(error){
    alert(error);
  }
  function getFilteredTweets(loc){
   //loc = '40.765210,-73.982502'; default manhattan
   var url = 'https://vert-saucisson-8798.herokuapp.com/twitter/' + loc;
   //var url = 'http://localhost:9000/twitter/' + loc;
    if ($scope.filterText.length > 1){
      url = url + '/' + $scope.filterText;
    }
    $http.get(url). 
      success(function(data, status, headers, config) { 
        $scope.tweets = processResult(data);
      }).
      error(function(data, status, headers, config) { 
      });
  }

  function getSearchAddressFromGeo(loc){
     var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + loc + '&sensor=true';
     $http.get(url).
       success(function(data, status, headers, config) { 
          var formattedAddress = JSON.stringify(data.results[0].formatted_address);
         if (formattedAddress.length > 0){
           $scope.address = 'guruzling near ' + formattedAddress;
         }
       }).
      error(function(data, status, headers, config) { 

      });

  }

  function processResult(jsonObj){
    var userList = [];
    for (var i = 0; i < jsonObj.statuses.length; i++){
      var status = jsonObj.statuses[i];
      var geo = '';
      var location = '';
      var name = 'John Doe';
      var image_url = '';
      var user_url = 'http://www.twitter.com';
      var address = '';
      if (status.geo){
        geo = status.geo.coordinates[0] + ',' + status.geo.coordinates[1];
      }
      if (status.place){
        location = status.place.full_name;
      }
      if (status.user){
        name = status.user.name;
        image_url = status.user.profile_image_url;
      }
      var time = status.created_at.substr(0,status.created_at.indexOf('+'));
      userObj = {
        'name' : name,
        'location' : location,
        'map_url' : 'http://www.google.com/maps/place/' + geo + '/@' + geo + 'z',
        'time' : time,
        'text' : status.text,
        'user_url' : status.user.url,
        'image_url' : image_url
      }
      userList.push(userObj);
    }
    return {'statuses' : userList};
  }
  $scope.onClickFilter = function(){
    loadTwitter()
  }
  $scope.brand = 'Guruzle';
  $scope.message = 'Welcome to Guruzle - Home';
  $scope.isActive = function (viewLocation) {return viewLocation === $location.path();}
  }]);

