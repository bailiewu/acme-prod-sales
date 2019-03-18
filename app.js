const app = require('express')()
const { Product } = require('./db/index').models

app.get('/products', (req, res, next) => {
    Product.findAll()
        .then( (product) => {
            res.json(product)
        })
        .catch(next)
})

//post
app.post('/products', (req, res, next) => {
    // console.log('in api post products :', req.body)
    Product.create(req.body)
        .catch(next)
})

//delete
app.delete('/products/:productId', (req, res, next) => {
    Product.destroy({
      where: {
        id: req.params.productId
      }
    })
      .then(() => res.status(204).end())
      .catch(next)
  })

module.exports = app
