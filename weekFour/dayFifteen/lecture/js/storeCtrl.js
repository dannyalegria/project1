angular.module("myApp")
.controller("storeCtrl", function($scope, productsService){

  productsService.getProducts().then(function(products){
    $scope.products = products;
  })

})
