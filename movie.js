/*exports.Movie = class {
    constructor(title, category, realeaseYear, poster, directors, actors, synopsis, rate, lastViewDate, price) {
        this.title = title;
        this.category = category;
        this.releaseYear = realeaseYear;
        this.poster = poster;
        this.directors = directors;
        this.actors = actors;
        this.synopsis = synopsis;
        this.rate = rate;
        this.lastViewDate = lastViewDate;
        this.price  = price
    };
}
*/


class Movie {
    constructor(id, title, category, releaseYear, poster, directors, actors, synopsis, rate, lastViewDate, price) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.releaseYear = releaseYear;
        this.poster = poster;
        this.directors = directors;
        this.actors = actors;
        this.synopsis = synopsis;
        this.rate = rate;
        this.lastViewDate = lastViewDate;
        this.price = price;
    }
}

module.exports = Movie;