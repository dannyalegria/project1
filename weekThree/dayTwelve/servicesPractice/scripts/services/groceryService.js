angular.module('myApp')

.service('groceryService', function(){

  var groceryItems = [
    {
      name:'lettuce',
      price: 99
    },
    {
      name: 'soda',
      price: 199
    },
    {
      name: 'chocolate milk',
      price: 299
    },
    {
      name: 'toast',
      price: 599
    }
  ];

  this.getGroceries = function(){
    return groceryItems;
  };
  
})
