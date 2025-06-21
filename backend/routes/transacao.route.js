const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const transacaoController = require("../controllers/transacao.controller");

//rotas (endpoints) da entidade 'transacao'
router.post(
  "/transacao",
  middleware.checkToken,
  transacaoController.createTransacao
);

router.get(
  "/transacoes",
  middleware.checkToken,
  transacaoController.getAllTransacoes
);

router.put(
  "/transacao/:id",
  middleware.checkToken,
  transacaoController.updateTransacao
);

router.delete(
  "/transacao/:id",
  middleware.checkToken,
  transacaoController.deleteTransacao
);

router.get(
  "/transacao/:id",
  middleware.checkToken,
  transacaoController.getTransacaoById
);

module.exports = router;
