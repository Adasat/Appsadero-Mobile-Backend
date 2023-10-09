const adminRouter = require('express').Router()
const {logIn, signUp} = require('../controllers/auth.controller')

adminRouter.post('/login', logIn)
adminRouter.post('/signup', signUp)


module.exports= adminRouter