let Movie = require('../models/pg').movie

module.exports = (req, res) => {
    Movie.findAll()
    .then(result => {
        res.render('index', {
            result
        })
    })
}