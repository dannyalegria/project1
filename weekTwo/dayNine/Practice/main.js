$('document').ready(function(){

  var $content = $('.content');

  $('#hide').on('click', function(){
    $('p').hide();
  });

  $('#show').on('click', function(){
    $('p').show();
  });

});
