const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/', (req, res) => {
  res.send('Hello')
})

routes.get('/signup', UserController.create)
routes.post('/signup', UserController.store)

module.exports = routes
