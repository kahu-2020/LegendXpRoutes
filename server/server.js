const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const mobRoutes = require('./routes/mobs')
const server = express()

server.use(cors('*'))

server.use(express.json())
server.use(express.static('public'))

server.use('/api/auth', authRoutes)
server.use('/api/mob', mobRoutes)

module.exports = server
