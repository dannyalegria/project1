angular.module("myApp")
.service("productsService", function($http){

  this.getProducts = function() {
    return $http.get("https://practiceapi.devmountain.com/products")
    .then(function(res) {
      return res.data;
    })
  }

  this.getOneProduct = function(id){
    return $http.get("https://practiceapi.devmountain.com/products/" + id)
    .then(function(res){
      return res.data;
    })
  }

})
