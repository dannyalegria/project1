angular.module("app")
.controller("mainController", function($scope, $http, mainService, weatherService,websitesService){

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  $scope.date = new Date();

  weatherService.getWeather().then(function(response){
    console.log(response);
    console.log(response.data.query.results.channel);
    console.log(response.data.query.results.channel.item.condition.code)
    $scope.weather = response.data.query.results.channel;
    var weatherCode = response.data.query.results.channel.item.condition.code;
    $scope.icon = weatherService.iconFunction(weatherCode);

  });

  mainService.getData().success(function(response){
    $scope.data = response.data.children;
    console.log(response.data.children);
  });

  $scope.getSmmry = function(item){
    if (!item.smmry) {
      mainService.getSmmry(item.data.url).then(function(response){
        item.smmry = response.data.sm_api_content;
        console.log(response.data.sm_api_content);
      });
    }
  }

  $scope.sites = websitesService.array;

});
