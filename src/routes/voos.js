var express = require("express");
var router = express.Router();

var vooController = require("../controllers/vooController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/kpi1/:id", function (req, res) {
    vooController.buscarKpi1(req, res);
})


router.get("/kpi2/:id", function (req, res) {
    vooController.buscarKpi2(req, res);
})

router.get("/kpi3/:id", function (req, res) {
    vooController.buscarKpi3(req, res);
})

router.get("/kpi4/:id", function (req, res) {
    vooController.buscarKpi4(req, res);
})


router.get("/graficoJustificativas/:id", function (req, res) {
    vooController.buscarJustificativas(req, res);
})
module.exports = router;