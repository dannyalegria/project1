var demoApp = angular.module('demoApp',[]);

function simpleController($scope){
  $scope.customers = [
  {name:'John Smith',city: 'Phoenix'},
  {name:'John Doe',city: 'New York City'},
  {name:'Jane Doe',city: 'San Francisco'}
  ];
}

demoApp.controller('simpleController', simpleController);