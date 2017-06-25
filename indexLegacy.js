/*
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

/*app.get('/', function(req, res){
 console.log(req.get('toto'));
 console.log(req.body);

 let verif = req.get('toto');
 if ( parseInt(verif)  === 42 ) {
 res.status(200).send('hello world' + verif);
 } else {
 res.status(401).send('degage');
 }
 });



app.get('/movies', (req, res) => movie.getAllMovies(req, res));
app.get('/movies/:id', (req, res) =>movie.getMovie(req, res));
app.delete('/movies/:id', (req, res) => movie.deleteMovie(req, res));
app.post('/movies', (req, res) => movie.createMovie(req, res));


//app.get('/movies/:id', getSingleMovie);


//app.get('/movies/:id', routes.project.get);

// app.get('/movies/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     let movieSelected = data.filter(function (o){
//         return o.id == id;
//     });
//     res.status(200).send(movieSelected);
//
// })

app.delete('/movies/:id', (req, res) => {
 const id = req.params.id;
 console.log(id);
 let movieSelected = data.filter(function (o) {
 return o.id == id;
 });

 console.log(movieSelected);
 console.log(movieSelected === []);

 if (movieSelected.length > 0) {
 for (let i = 0; i < data.length; i++) {

 if (data[i].id == id)
 data.splice(i, 1);
 }
 res.status(200).send('deleted');
 } else {
 res.status(400).send('cant');
 }

 })
 */


/*
 app.post('/movies', function (req, res) {


 //console.log(Object.keys(data).length);
 console.log("coucou");
 //console.log(req.body.title);
 //console.log(movie);

 /*if (req.body instanceof Movie) {
 console.log(true);
 } else {
 console.log(false);
 }

 //data.push(req.body);
 //let movie = new Movie("Avatar", "sciencesfiction",  "2010", "server/img/avatar.jpg", "James Cameron", "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez", "Sur la lointaine planète de Pandora, Jake Sully, un hÃ©ros malgré lui, se lance dans une quête de rédemption, de découverte, d'amour inattendu, dont l'issue sera un combat héroïque pour sauver toute une civilisation.",
 //    3,"2013-04-01T10:04:50.000Z",25.46);
 //console.log(movie);

 let movie1 = new Movie(req.body.title, req.body.category, req.body.releaseYear, req.body.poster, req.body.directors, req.body.actors, req.body.synopsis, req.body.rate, req.body.lastViewDate, req.body.price);
 data.push(movie1);


 res.send('POST request to the homepage')
 })

 */

/*app.post('/movies', (req, res) => {
 let id = Object.keys(data).length + 1;
 let movie = new Movie(id,req.body.title, req.body.category, req.body.releaseYear, req.body.poster, req.body.directors, req.body.actors, req.body.synopsis, req.body.rate, req.body.lastViewDate, req.body.price);
 if (req.body.title && req.body.category && req.body.releaseYear && req.body.poster && req.body.directors && req.body.actors && req.body.synopsis && req.body.rate && req.body.lastViewDate && req.body.price) {
 data.push(movie);
 res.status(200).send('movie posted');
 } else {
 res.status(400).send('not posted');

 }

 });
 */

/*
 app.post('/movies', (req, res) => {
 let id = Object.keys(data).length + 1;
 let arr = Object.keys(req.body);
 if (helper.sameKeys(arr, config.movieKeys)) {
 req.body.id = id;
 data.push(req.body);
 res.status(200).send('movie posted');
 } else {
 res.status(400).send('not posted');

 }
 });




app.post('/movies', (req, res) => movie.createMovie(req, res));

app.patch('/movies/:id', (req, res) => {

    const id = req.params.id;

    let movieSelected = data.filter(function (o) {
        return o.id == id;
    });

    //console.log(id);
    console.log(req.body);
    console.log(movieSelected);

    for(let key in req.body) {
        console.log(key);
        if ( movieSelected[0].hasOwnProperty(key) ) {
            console.log(key);
            console.log(movieSelected[0][key]);
            console.log(req.body[key]);
            movieSelected[0][key] = req.body[key];
        }

    }

    //data[id - 1]['title'] = req.body.title;

    //console.log(data[id - 1]);
    res.status(200).send("ok");

});

 app.delete('/', function(req, res){
 res.send('delete');
 });




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

*/

