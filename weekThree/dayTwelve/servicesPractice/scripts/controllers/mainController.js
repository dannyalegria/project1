angular.module('myApp')

.controller('mainController', function($scope, groceryService){

  $scope.groceries = groceryService.getGroceries();

  //All this stuff below should be in a service.
  //Work for later.

  $scope.cart = [];

  $scope.addItemToCart = function(grocery){
    $scope.cart.push(grocery);
    addPrices();
  }

  function addPrices(){
    var total = 0;
    for(var i = 0; i < $scope.cart.length; i++){
      total += $scope.cart[i].price;
    }
    $scope.total = total;
  }

});
