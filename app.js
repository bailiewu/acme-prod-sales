const app = require('express')()
const { Product } = require('./db/index').models

// api/users
app.get('/products', (req, res, next) => {
    Product.findAll()
        .then( (product) => {
            res.json(product)
        })
        .catch(next)
})

module.exports = app
