
const data = require('./data').movies;

module.exports = function getSingleMovie(req, res) {

    const id = req.params.id;
    console.log(id);
    let movieSelected = data.filter(function (o){
        return o.id == id;
    });
    res.status(200).send(movieSelected);

}

