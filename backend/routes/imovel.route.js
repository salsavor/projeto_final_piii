const express = require('express')
const router = express.Router()

//importação da middleware
const middleware = require('../middleware')

//importação do controller
const imovelController = require('../controllers/imovel.controller')

//rotas (endpoints) da entidade 'imovel'
router.post('/imovel', middleware.checkToken, imovelController.createImovel)

router.get('/imovels', middleware.checkToken, imovelController.getAllImovels)

router.put('/imovel/:id', middleware.checkToken, imovelController.updateImovel)

router.delete('/imovel/:id', middleware.checkToken, imovelController.deleteImovel)

router.get('/imovel/:id', middleware.checkToken, imovelController.getImovelById)

router.get('/imovel/:local', middleware.checkToken, imovelController.getImovelByLocal)

module.exports = router