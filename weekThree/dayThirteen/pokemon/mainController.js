angular.module('myApp')
.controller('mainController', function($scope, mainService){
  mainService.getPokemon().then(function(response){
    $scope.pokemon = response.data.results;
  })
})
