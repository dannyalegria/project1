angular.module("app")
.controller("mainController", function($scope, $http, mainService){
  console.log('things');
  mainService.getWeather().then(function(response){
    $scope.weather = response.data;
    console.log(response); //first, console log the response to see what we need to find.
  });

  mainService.getData().success(function(response){
    $scope.data = response.data.children;
    // console.log(response.data.children);
  });

  $scope.getSmmry = function(item){
    if (!item.smmry) {
      mainService.getSmmry(item.data.url).then(function(response){
        item.smmry = response.data.sm_api_content;
        // console.log(response.data.sm_api_content);
      });
    }
  }

});
