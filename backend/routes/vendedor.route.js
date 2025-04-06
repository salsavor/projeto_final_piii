const express = require('express')
const router = express.Router()

//importação da middleware
const middleware = require('../middleware')

//importação do controller
const vendedorController = require('../controllers/vendedor.controller')

//rotas (endpoints) da entidade 'vendedor'
router.post('/vendedor', middleware.checkToken, vendedorController.createVendedor)

router.get('/vendedores', middleware.checkToken, vendedorController.getAllVendedores)

router.put('/vendedor/:id', middleware.checkToken, vendedorController.updateVendedor)

router.delete('/vendedor/:id', middleware.checkToken, vendedorController.deleteVendedor)

router.get('/vendedor/:id', middleware.checkToken, vendedorController.getVendedorById)

router.get('/vendedor/:name', middleware.checkToken, vendedorController.getVendedorByName)

module.exports = router