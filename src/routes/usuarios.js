const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", (req, res) => {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", (req, res) => {
    usuarioController.autenticar(req, res);
});

module.exports = router;
