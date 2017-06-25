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

module.exports = {
    getMovie : getMovie,
    getAllMovies : getAllMovies
}

