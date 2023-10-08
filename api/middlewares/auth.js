const jwt = require('jsonwebtoken')
const UserSchema = require('../schemas/user.schema')

const checkAuth = (req, res, next) => {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, async (error, result) => {
        if(error){
            return res.status(403).send('>> Token not valid!')
        }
        const user = await UserSchema.findOne({ where: {email: result.email} })
        if(!user){
            return res.status(403).send('>> Token not valid!')
        }
        res.locals.user = user
        next()
    })
}


module.exports = { checkAuth };