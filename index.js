const data = require('./data').movies;

const Movie = require('./movie');

const helper = require('./tool');
const config = require('./config');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const movie = require('./actions');

//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS', 'PATCH');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/movies', (req, res) => movie.getAllMovies(req, res));
app.get('/movies/:id', (req, res) =>movie.getMovie(req, res));
app.delete('/movies/:id', (req, res) => movie.deleteMovie(req, res));
app.post('/movies', (req, res) => movie.createMovie(req, res));
app.patch('/movies/:id', (req, res) => movie.updateMovie(req, res));
app.put('/movies/:id', (req, res) => movie.replaceMovie(req, res));


app.listen(3000);

