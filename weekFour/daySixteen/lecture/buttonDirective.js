angular.module("myApp")
.directive("partyButton", function(){

  return {
    restrict: "E",
    scope: {
      name: '=',
      message: "@"
    },
    template: "<div><button>{{message}}</button></div>",
    link: function(scope, element, attributes){

      scope.name = "Daniel";

      console.log(scope.name);

    }
  }
});
