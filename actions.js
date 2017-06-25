const data = require('./data').movies;
const helper = require('./tool');
const config = require('./config');

function getMovie(req, res) {

    let id = req.params.id;
    let movieSelected = data.filter(function (o){
        return o.id == id;
    });
    if (movieSelected.length > 0) {
        res.status(200).send(movieSelected);
    } else {
        res.status(400).send('Movie not available');
    }

}


function getAllMovies(req, res) {
    res.status(200).send(data);

}

function deleteMovie(req, res) {
    const id = req.params.id;
    let movieSelected = data.filter(function (o) {
        return o.id == id;
    });

    if (movieSelected.length > 0) {
        for (let i = 0; i < data.length; i++) {

            if (data[i].id == id)
                data.splice(i, 1);
        }
        res.status(200).send('deleted');
    } else {
        res.status(400).send('error');
    }

}


function createMovie(req, res) {
    let id = Object.keys(data).length + 1;
    let arr = Object.keys(req.body);
    if (helper.sameKeys(arr, config.movieKeys)) {
        req.body.id = id;
        data.push(req.body);
        res.status(200).send('movie posted');
    } else {
        res.status(400).send('not posted');

    }
}


function updateMovie(req, res) {

    let id = req.params.id;

    let movieSelected = data.filter(function (o) {
        return o.id == id;
    });

    if ( movieSelected.length > 0) {
        for(let key in req.body) {

            if ( movieSelected[0].hasOwnProperty(key) ) {
                movieSelected[0][key] = req.body[key];
            }
        }
        res.status(200).send("Updated the movie");

    } else {
        res.status(400).send("Unable to update");

    }

}

function replaceMovie(req, res) {
    let id = req.params.id;
    let arr = Object.keys(req.body);
    console.log(req.body);
    console.log(arr);
    for (var i=0; i < data.length; i++) {
        if (data[i].id == id) {
            if (helper.sameKeys(arr, config.movieKeys)) {
                console.log(Object.keys(data[i]));
                Object.keys(data[i]).map(function(el) {
                    data[i][el] = req.body[el];

                });
                data[i].id = id;

                res.status(200).send('movie updated');
            }
            else {
                res.status(400).send('all fields need to be filled');
            }
        }
    }
};


module.exports = {
    getMovie : getMovie,
    getAllMovies : getAllMovies,
    deleteMovie : deleteMovie,
    createMovie : createMovie,
    updateMovie : updateMovie,
    replaceMovie : replaceMovie

}

