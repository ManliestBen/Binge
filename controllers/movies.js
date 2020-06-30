const Movie = require('../models/movie');

module.exports = {
    create,
    index
}

function create(req, res) {
    Movie.create(req.body)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Movie.find({})
    .then(movies => {res.json(movies)})
    .catch(err => {res.json(err)})

}