var express = require("express");
var router = express.Router();

var relatorioController = require("../controllers/relatorioController");

router.post("/criar", function(req, res) {
    relatorioController.criarRelatorio(req, res);
});

router.put("/atualizarQuery", function(req, res) {
    relatorioController.atualizarQuery(req, res);
});

router.delete("/deletar/:id", function(req, res) {
    relatorioController.deletarRelatorio(req, res);
});

router.get("/mostrar/:id", function(req, res) {
    relatorioController.mostrarRelatorio(req, res);
});

router.get("/listar", function(req, res) {
    relatorioController.listarRelatorios(req, res);
});

module.exports = router;
