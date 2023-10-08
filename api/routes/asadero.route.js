const asaderoRouter = require('express').Router()
const { getAllMyAsaderos, createAsadero } = require('../controllers/asadero.controller')
const { checkAuth } = require('../middlewares/auth') 

asaderoRouter.post('/create', /* checkAuth,*/ createAsadero)

asaderoRouter.get('/', checkAuth, getAllMyAsaderos)

module.exports = asaderoRouter