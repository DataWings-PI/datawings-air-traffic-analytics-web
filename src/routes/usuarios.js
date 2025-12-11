const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", (req, res) => {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", (req, res) => {
    usuarioController.autenticar(req, res);
});

router.put("/atualizar/:id", (req, res) => {
    usuarioController.atualizar(req, res);
});

router.delete("/deletar/:id", (req, res) => {
    usuarioController.deletar(req, res);
});

router.post("/ligarDesligar", function (req, res) {
    usuarioController.ligarDesligar(req, res);
})

module.exports = router;
