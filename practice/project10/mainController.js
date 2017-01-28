angular.module("app")
.controller("mainController", function($scope, $http, mainService){

  mainService.getData().success(function(response){
    $scope.data = response.data.children;
    console.log(response.data.children);
  });

  $scope.getSmmry = function(item){
    if (!item.smmry) {
      mainService.getSmmry(item.data.url).then(function(response){
        console.log(response.data.sm_api_content);
        item.smmry = response.data.sm_api_content;
      });
    }
  }

});
