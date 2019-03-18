const { conn } = require('./conn')
const Product = require('./product')

const syncAndSeed = () => {
  return conn.sync({ force: true })
    .then(() => {
      return Promise.all([
        Product.create({ name: 'Foo', price: 3, onSale: true, discountPercentage: 20, availability: 'instock'}),
        Product.create({ name: 'Bar', price: 8, availability: 'instock'}),
        Product.create({ name: 'Bazz', price: 4, availability: 'backordered'}),
        Product.create({ name: 'Quq', price: 2, availability: 'discontinued'}),
      ])
    })
}
module.exports = {
    syncAndSeed,
    models: {
        Product
    }
}
