const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const authController = require("../controllers/auth.controller");

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post(
  "/refresh-token",
  middleware.checkToken,
  authController.refreshToken
);
router.post("/logout", middleware.checkToken, authController.logoutUser);
router.post("/api/register", async (req, res) => {
  const { nome, email, nif, ocupacao, password } = req.body;
  // Valida e guarda estes dados na base de dados
});

module.exports = router;
