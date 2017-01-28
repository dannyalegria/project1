angular.module("app")
.service("websitesService", function($http){

  this.array = [
    { 'name':'Gmail',
      'url':'https://mail.google.com/',
      'icon':'fa fa-envelope'},
    { 'name':'Calendar',
      'url':'https://calendar.google.com/',
      'icon':'fa fa-calendar'},
    { 'name':'Bank',
      'url':'https://www.usbank.com',
      'icon':'fa fa-university'},
    { 'name':'NPR',
      'url': 'www.npr.org',
      'icon':'fa fa-newspaper-o'},
    { 'name':'Netflix',
      'url':'https://www.netflix.com',
      'icon':'fa fa-film'},
    { 'name':'YouTube',
      'url':'https://www.youtube.com/',
      'icon':'fa fa-youtube-play'},
    { 'name':'Reddit',
      'url':'https://www.reddit.com/',
      'icon':'fa fa-reddit-alien'},
    { 'name':'LinkedIn',
      'url':'https://www.linkedin.com',
      'icon':'fa fa-linkedin '},
    { 'name':'Class',
      'url':'http://class.devmountain.com/#/',
      'icon':'fa fa-graduation-cap'},
    { 'name':'Repl.it',
      'url':'https://repl.it/sessions',
      'icon':'fa fa-code'},
    { 'name':'CodePen',
      'url':'https://codepen.io/',
      'icon':'fa fa-codepen'},
    { 'name':'Python Tutor',
      'url':'www.pythontutor.com',
      'icon':'fa fa-question'}

  ];

});
