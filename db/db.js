const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {dbName: process.env.DB_NAME})
    } catch (error) {
        console.error('Error: ', error)
        throw new Error('DB connection failed.')
    }
}

module.exports = { connectionDB }