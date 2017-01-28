angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: '/routes/home/homeTemplate.html',
      controller: '/routes/home/homeController.js',
      url: '/'
    })
    .state('users', {
      templateUrl: '/routes/users/usersTemplate.html',
      controller: '/routes/users/usersTemplate.html',
      url: '/users'
    })

})
