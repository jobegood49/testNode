const data = require('./data').movies;

const Movie = require('./movie');

const helper = require('./tool');
const config = require('./config');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const a = require('./getSingleMovie.js');
const getSingleMovie = require('./getSingleMovie.js');
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



app.put('/movies/:id', (req, res) => {
    let id = req.params.id;
    for (var i=0; i < data.length; i++) {
        if (data[i].id == id) {
            if (req.body.title && req.body.category && req.body.releaseYear && req.body.poster && req.body.directors && req.body.actors && req.body.synopsis && req.body.rate && req.body.lastViewDate && req.body.price) {
                data[i].title = req.body.title;
                data[i].category = req.body.category;
                data[i].releaseYear = req.body.releaseYear;
                data[i].poster = req.body.poster;
                data[i].directors = req.body.directors;
                data[i].actors = req.body.actors;
                data[i].synopsis = req.body.synopsis;
                data[i].rate = req.body.rate;
                data[i].lastViewDate = req.body.lastViewDate;
                data[i].price = req.body.price;
                res.status(200).send('movie updated');
            }
            else {
                res.status(400).send('all fields need to be filled');
            }
        }
    }
});


app.listen(3000);

