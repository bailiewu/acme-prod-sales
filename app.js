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
        .then(product => res.json(product))
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

//update. nevermind theres no update.
// app.put('products/:todoId', (req, res, next) => {
//   Product.findById(req.params.todoId)
//     .then(product => product.update(req.body))
//     .then(product => res.json(product))
//     .catch(next)
// })

module.exports = app
