angular.module('app')
.service('mainService', function($http){

  this.getWeather = function(){
    console.log('im here');
    return $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?APPID=1ad620879e9a8706e09c9a82d51479b1&q=London'
    })
  }

  this.getData = function(){
  return $http.get("https://www.reddit.com/r/news/.json?sort=top&t=day&limit=15")
  };

  this.getSmmry = function(url){
    return $http({
      method: 'GET',
      url: 'http://api.smmry.com/&SM_API_KEY=76E43EEBEE&SM_URL=' + url
    })
  }

});
