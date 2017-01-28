angular.module('quoteBook')
.controller('mainController', function($scope, dataService){
  $scope.test = "hello"
  $scope.getQuotes = dataService.getQuotes()
  $scope.addData = dataService.addData
  $scope.removeData = dataService.removeData
});
