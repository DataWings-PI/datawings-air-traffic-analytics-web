var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/listar", function (req, res) {
    empresaController.listarEmpresas(req, res);
});

router.post("/cadastrarEmpresa", function (req, res) {
    empresaController.cadastrarEmpresa(req, res);
})

router.patch("/atualizarStatus/:id", function (req, res) {
    empresaController.atualizarStatus(req, res);
})

router.delete("/deletarEmpresa/:id", function (req, res) {
    empresaController.deletarEmpresa(req, res);
})

module.exports = router;


