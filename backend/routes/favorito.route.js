const express = require("express");
const router = express.Router();

//importação da middleware
const middleware = require("../middleware");

//importação do controller
const alunoController = require("../controllers/aluno.controller");

//rotas (endpoints) da entidade 'favorito'
router.post("/favorito", middleware.checkToken, alunoController.createFavorito);

router.get(
  "/favoritos",
  middleware.checkToken,
  alunoController.getAllFavoritos
);

router.put(
  "/favorito/:id",
  middleware.checkToken,
  alunoController.updateFavorito
);

router.delete(
  "/favorito/:id",
  middleware.checkToken,
  alunoController.deleteFavorito
);

router.get(
  "/favorito/:id",
  middleware.checkToken,
  alunoController.getFavoritoById
);

router.get(
  "/favorito/:cliente_id",
  middleware.checkToken,
  alunoController.getFavoritoByClienteId
);

module.exports = router;
