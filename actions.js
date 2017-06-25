const data = require('./data').movies;

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

module.exports = {
    getMovie : getMovie,
    getAllMovies : getAllMovies,
    deleteMovie : deleteMovie
}

