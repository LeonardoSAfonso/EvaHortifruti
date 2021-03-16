const express = require('express')
const authMiddleware = require('../config/middleware/auth')

const userController = require('../config/controllers/userController')
const productController = require('../config/controllers/productController');

const routes = express.Router();

routes.get('/users', userController.index)
routes.post('/login', userController.login)
routes.post('/registro', userController.registro)
routes.delete('/deleteUser', authMiddleware, userController.delete)

routes.post('/produtos', authMiddleware, productController.create)
routes.get('/produtos', authMiddleware, productController.index)
routes.put('/produtos/:id', authMiddleware, productController.update)
routes.delete('/produtos/:id', authMiddleware, productController.delete)
routes.get('/produtos/:id', authMiddleware, productController.getByID)


module.exports=routes

