const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.listen(3000, () => { console.log("Server have been started") })


mongoose.connect('mongodb://root:root@localhost:8081/db')
const mongodb = mongoose.connection


mongodb.on('error', (error) => console.error(error))
mongodb.once('open', () => console.log("Connected to DB "))



