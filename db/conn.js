const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme-product-sales', {
    logging: false
})

module.exports = { conn, Sequelize }
