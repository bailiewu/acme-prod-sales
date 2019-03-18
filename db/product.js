const {conn, Sequelize} = require('./conn')

const Product = conn.define('product', {
    name: Sequelize.TEXT,
    price: Sequelize.DOUBLE,
    salePrice: Sequelize.DOUBLE,
    onSale: Sequelize.BOOLEAN,
    discountPercentage: Sequelize.DOUBLE,
    availability: {
        type: Sequelize.ENUM,
        values: ['instock', 'backordered', 'discontinued'],
    }
}, {
    hooks: {
        beforeCreate: ( (product) => {
            if (product.discountPercentage) {
                product.salePrice = product.price * (100 - product.discountPercentage) / 100
            }
            if (!product.onSale) {
                product.onSale = false
            }
        })
    }
})

module.exports = Product
