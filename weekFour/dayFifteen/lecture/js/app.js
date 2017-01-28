angular.module("myApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state("home",{
      url: "/",
      template: "<h1>You are on the Home Page</h1>"
    })
    .state("store", {
      url: "/store",
      controller: "storeCtrl",
      templateUrl: "../store.html"
    })
    .state("detail", {
      url: "/products/:id",
      templateUrl: "../detail.html"
    })
});
