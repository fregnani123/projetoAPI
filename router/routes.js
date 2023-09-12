const express = require('express');
const Router = express.Router()
const controllers = require('../controllers/controllers')

Router.get('/findAll', controllers.findUsers)
Router.get('/find/:id', controllers.findOne)


module.exports =  Router;