const router = require('express').Router()

router.use('/user', require('./user.route'))
router.use('/asadero', require('./asadero.route'))
router.use('/products', require('./product.route.js'))
router.use('/cart', require('./cart.route.js'))

module.exports = router