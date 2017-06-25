const obj = {
    "title": "The Grudge",
    "category": "horreur",
    "releaseYear": "2004",
    "poster": "server/img/thegrudge.jpg",
    "directors": "Takashi Shimizu",
    "actors": "Sarah Michelle Gellar, Jason Behr, Clea DuVall, Kadee Strickland, Bill Pullman",
    "synopsis": "Dans ce qui paraît être une paisible maison de Tokyo se cache un épouvantable fléau. Quiconque franchit le seuil de la demeure est aussitôt frappé par une malédiction qui ne tardera pas à le tuer dans un sentiment d'indicible rage...",
    "rate": 4,
    "lastViewDate": "2006-12-28T05:03:05.000Z",
    "price": 15.23
}

const arr1 = [
    'title',
    'category',
    'releaseYear',
    'poster',
    'directors',
    'actors',
    'synopsis',
    'rate',
    'lastViewDate',
    'price'
];


var arr2 = Object.keys(obj);

const containsAll = (arr1, arr2) =>
    arr2.every(arr2Item => arr1.includes(arr2Item))

const sameKeys = (arr1, arr2) =>
containsAll(arr1, arr2) && containsAll(arr2, arr1);

let res = sameKeys(arr1, arr2);

console.log(res);

module.exports = {
    sameKeys : sameKeys
}