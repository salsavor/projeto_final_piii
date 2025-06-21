const express = require("express");
const { body, validationResult } = require("express-validator");
const imovelController = require("../controllers/imovel.controller");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const imovelController = require("../controllers/imovel.controller");

//rotas (endpoints) da entidade 'imovel'
router.post(
  "/imovel",
  [
    body("local").notEmpty().withMessage("O campo local é obrigatório."),
    body("tipo_imovel")
      .notEmpty()
      .withMessage("O tipo de imóvel é obrigatório."),
    body("preco")
      .isFloat({ gt: 0 })
      .withMessage("O preço deve ser um número positivo."),
    body("vendedor_id")
      .isInt()
      .withMessage("O vendedor_id deve ser um número inteiro."),
  ],
  middleware.checkToken,
  imovelController.createImovel
);

router.get("/imovels", middleware.checkToken, imovelController.getAllImovels);

router.put("/imovel/:id", middleware.checkToken, imovelController.updateImovel);

router.delete(
  "/imovel/:id",
  middleware.checkToken,
  imovelController.deleteImovel
);

router.get(
  "/imovel/:id",
  middleware.checkToken,
  imovelController.getImovelById
);

router.get(
  "/imovel/:local",
  middleware.checkToken,
  imovelController.getImovelByLocal
);

module.exports = router;
