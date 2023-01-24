require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.listen(3000, () => { console.log("Server have been started") })

//Connect to DB URL is in .env file
mongoose.connect(process.env.DATABASE_URL)
const mongodb = mongoose.connection

//Check if DB Connected succsessfuly
mongodb.on('error', (error) => console.error(error))
mongodb.once('open', () => console.log("Connected to DB "))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

