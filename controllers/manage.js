let pg = require('../models/pg')
let Movie = pg.movie
let {check, expressValidation} = require('express-validator')

module.exports.create = (req, res) => {
    res.render('create')
}

module.exports.create_process = [
    check('title').not().isEmpty().withMessage('Please Input ')
        .isLength({max: 20}).withMessage('Length of title limit by 20 characters').escape(),
    
],
(req, res) => {
    let {title, date, genre, price} = req.body
    Movie.create(
        {Title: title, DateTime: date, Genre: genre, Price: price}
    )
    res.render('create', {
        result: 'Create Successfully'
    })
}

module.exports.delete_process = (req, res) => {
    let id = req.params.id
    Movie.destroy({
        where: {
            ID: id
        }
    })
    .then(() => {
        res.redirect('/')
    })
}