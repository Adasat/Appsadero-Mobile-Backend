require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()
const router = require('./api/routes/index')
const { connectionDB } = require("./db/db");

const start = async() => {
    try {
        app.use(cors())
        app.use(morgan('dev'))
        app.use(express.json())
        app.use('/api', router)
        await connectionDB()
        await app.listen(process.env.DB_PORT, () => {
            console.log('Server is running.')
        })
    } catch (error) {
        throw new Error('Error: ', error)
    }
}

start();