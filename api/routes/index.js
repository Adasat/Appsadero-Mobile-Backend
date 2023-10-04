const router = require('express').Router()

router.use('/admin', require('./admin.route'))
router.use('/asadero', require('./asadero.route'))
router.use('/cart', require('./cart.route'))
router.use('/product', require('./product.route'))
router.use('/user', require('./user.route'))

module.exports = router