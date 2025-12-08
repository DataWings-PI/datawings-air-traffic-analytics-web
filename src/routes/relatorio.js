var express = require("express");
var router = express.Router();

var relatorioController = require("../controllers/relatorioController");

router.post("/criar", function(req, res) {
    console.log("Criando relatório:", req.body);
    relatorioController.criarRelatorio(req, res);
});

router.put("/atualizarRelatorio", function(req, res) {
    console.log("Atualizando relatório:", req.body);
    relatorioController.atualizarRelatorio(req, res);
});

router.delete("/deletar/:id", function(req, res) {
    console.log("Deletando relatório ID:", req.params.id); 
    relatorioController.deletarRelatorio(req, res);
});

router.get("/mostrar/:id", function(req, res) {
    console.log("Mostrando relatório ID:", req.params.id, "Usuário:", req.query.fk_usuario); 
    relatorioController.mostrarRelatorio(req, res);
});

router.get("/listar/:fk_usuario", function(req, res) {
    console.log("Listando relatórios do usuário:", req.params.fk_usuario); 
    relatorioController.listarRelatorios(req, res);
});

router.get("/kpi1/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("KPI 1 - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarKpi1(req, res);
});

router.get("/kpi2/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("KPI 2 - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarKpi2(req, res);
});

router.get("/kpi3/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("KPI 3 - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarKpi3(req, res);
});

router.get("/kpi4/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("KPI 4 - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarKpi4(req, res);
});

router.get("/justificativas/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("Justificativas - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarJustificativas(req, res);
});

router.get("/desempenho/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("Desempenho - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarDesempenho(req, res);
});

router.get("/voos/:fkEmpresa", function(req, res) {
    const { dataInicio, dataFinal } = req.query;
    console.log("Voos - Empresa:", req.params.fkEmpresa, "Datas:", dataInicio, "a", dataFinal);
    relatorioController.buscarVoos(req, res);
});

router.get("/dashboard/:idRelatorio", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("Dashboard completa - Relatório ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarDashboardPorRelatorio(req, res);
});

router.get("/:idRelatorio/kpi1", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("KPI 1 por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarKpi1PorRelatorio(req, res);
});

router.get("/:idRelatorio/kpi2", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("KPI 2 por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarKpi2PorRelatorio(req, res);
});

router.get("/:idRelatorio/kpi3", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("KPI 3 por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarKpi3PorRelatorio(req, res);
});

router.get("/:idRelatorio/kpi4", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("KPI 4 por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarKpi4PorRelatorio(req, res);
});

router.get("/:idRelatorio/justificativas", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("Justificativas por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarJustificativasPorRelatorio(req, res);
});

router.get("/:idRelatorio/desempenho", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("Desempenho por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarDesempenhoPorRelatorio(req, res);
});

router.get("/:idRelatorio/voos", function(req, res) {
    const fk_usuario = req.query.fk_usuario;
    console.log("Voos por relatório - ID:", req.params.idRelatorio, "Usuário:", fk_usuario);
    relatorioController.buscarVoosPorRelatorio(req, res);
});

module.exports = router;