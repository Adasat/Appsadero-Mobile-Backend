const User = require('../schemas/user.schema')
const Asadero = require('../schemas/asadero.schema')

// Profile route
const getAllProfiles = async(req, res) => {
    try {
        const users = await User.find()
        if(users.length === 0) return res.status(400).send('No users found')
        return res.status(200).json(users)
    } catch (error) {
       return res.status(400).send('An error ocurred!')
    }
}

const getOneProfile = async(req, res) => {
    const nicknameSearched = req.params.nickname
    try {
        const user = await User.findOne({nickname: nicknameSearched })
        if(!user) return res.status(400).send('User not found!')
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send('An error ocurred!')
    }
}

const updateProfile = async(req, res) => {
    try {
        const userId = req.body.UserId  // Iría el res.locals en el futuro
        const user = await User.findByIdAndUpdate(userId, { name: req.body.name }, { new: true })
        if (!user) return res.status(404).send('User not found')
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).send('An error ocurred!')
    }
}

const deleteProfile = async(req, res) => {
    try {
        const userId = req.body.UserId  // Iría el res.locals en el futuro
        const userDelete = await User.deleteOne({_id: userId})
        const user = await User.findbyId(userId)
        if(!user) return res.status(404).send('Delete successfully')
        return res.status(200).send('User exists yet')
    } catch (error) {
        return res.status(500).send('An error ocurred')
    }
}

const payAsadero = async (req, res) => {
    try {
        const asaderoId = req.body.asaderoId
        const userId = req.body.userId
        const user = await Asadero.findByIdAndUpdate(
            asaderoId,
            {
                $push: {
                    guests: {
                        user: {
                            _id: userId,
                        },
                        status: "paid"
                    }
                }
            },
            { new: true }
        );
        if (!user) return res.status(404).send('Asadero or user not found')
        return res.status(200).json({user, message: 'Paid successfully'})
    } catch (error) {
        return res.status(500).send('An error ocurred')   
    }
}

/*
friends route
getAllFriends
getOneFriend
addFriendByNickname
deleteFriend --> Eliminar amigos

---- profile route --------
1- getAllProfiles
2- getOneProfile
3- updateProfile --> Modificar perfil
4- deleteProfile --> Bafanculo
5- payAsadero
*/

module.exports = {
    getAllProfiles,
    getOneProfile,
    updateProfile,
    deleteProfile,
    payAsadero
}