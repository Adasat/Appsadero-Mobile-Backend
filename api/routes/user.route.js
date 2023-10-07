const userRouter = require('express').Router()
const {getAllProfiles, getOneProfile, updateProfile, deleteProfile, payAsadero} = require('../controllers/user.controller')

userRouter.get('/', getAllProfiles)
userRouter.get('/:nickname', getOneProfile)
userRouter.patch('/', updateProfile)
userRouter.delete('/', deleteProfile)
userRouter.patch('/pay', payAsadero)

module.exports = userRouter