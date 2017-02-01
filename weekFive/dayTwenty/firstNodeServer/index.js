//navigate to the directory in terminal.
//initialize package manager:
//  run npm init -y in the directory from the terminal.
//install packages:
//  run npm install --save express body-parser

//require the intalled packages:

var express = require('express');
var bodyParser = require('body-parser')

//initialize express and body-parser:

var app = express();

app.use(bodyParser.json());

//start listening to a port (on bottom of page).

//variables:

var movies = [];

var nextId = 0;

//setting up an endpoint for POST:

app.post('/api/movies', function(req, res){
  //specify correct properties:
  var correctProperties = [ 'title', 'releaseDate', 'rating', 'runtime' ]
  console.log(Object.getOwnPropertyNames(req.body), correctProperties);
  //make sure a movie is properly formatted.
  if (Object.getOwnPropertyNames(req.body).join(' ') == correctProperties.join(' ')){
    //add an Id:
    req.body.id = ++nextId;
    //take the new movie & add it to the collection.
    movies.push(req.body);
  }
  res.status(200).send('Ok');
})

//setting up GET endpoint to see movies:

app.get('/api/movies', function(req, res){
  res.status(200).json(movies);
  //check if working in postman.
})

//setting up GET endpoint to see individual movies:

app.get('/api/movies/:id', function(req, res){
  var target = req.params.id;
  var movie;
  for(var i = 0; i < movies.length; i++){
    if (movies[i].id == target){
      movie = movies[i];
      break;
    }
  }
  if (movie){
    return res.status(200).json(movie);
  } else {
    return res.status(404).send('Movie not found!')
  }
})

//setting up a PUT request:

app.put('/api/movies/:id', function(req, res){
  //find the movie that matches req.params.id
  //change the rating to req.body.newRating
  for(var i = 0; i < movies.length; i++){
    if (movies[i].id == req.params.id){
      //Merge an object in a put request to update a movie.
      Object.assign(movies[i], req.body);
      break;
    }
  }
  res.status(200).send('ok');
})

//setting up a delete request:

app.delete('/api/movies/:id', function(req, res){
  for(var i = 0; i < movies.length; i++) {
    if (movies[i].id == req.params.id) {
      movies.splice(i, 1);
      break;
    }
  }
  res.status(200).send('ok');
})

app.listen(3000, function(){
  console.log('listening on port 3000')
})

//  BLACK DIAMOND:
//
//  1.) Merge an object in a put request to update a movie.
//  2.) Make sure a movie is properly formatted.
//  3.) Make sure that every value in a new movie is the right data type.
//  4.) Look for a movie by name.
