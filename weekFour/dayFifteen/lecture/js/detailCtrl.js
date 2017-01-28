angular.module("myApp")
.controller("detailCtrl", function($scope, productsService, $stateParams){
  productsService.getOneProduct($stateParams.id).then(function(product){
    $scope.product = product;
  })
})
