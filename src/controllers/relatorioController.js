var relatorioModel = require("../models/relatorioModel");

function criarRelatorio(req, res) {
    var { nome, dataInicio, dataFinal, query } = req.body;
    var fk_usuario = req.session.usuarioId; // ou req.body.fk_usuario, dependendo da sua autenticação

    relatorioModel.criarRelatorio(nome, dataInicio, dataFinal, query, fk_usuario)
        .then(resultado => {
            res.status(201).json({ mensagem: "Relatório criado com sucesso", id: resultado.insertId });
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao criar relatório" });
        });
}

function atualizarQuery(req, res) {
    var { idRelatorio, novaQuery } = req.body;

    relatorioModel.atualizarQueryRelatorio(idRelatorio, novaQuery)
        .then(resultado => {
            res.json({ mensagem: "Query atualizada com sucesso" });
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao atualizar query" });
        });
}

function deletarRelatorio(req, res) {
    var idRelatorio = req.params.id;

    relatorioModel.deletarRelatorio(idRelatorio)
        .then(resultado => {
            res.json({ mensagem: "Relatório deletado com sucesso" });
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao deletar relatório" });
        });
}

function mostrarRelatorio(req, res) {
    var idRelatorio = req.params.id;
    var fk_usuario = req.session.usuarioId;

    relatorioModel.mostrarRelatorio(idRelatorio, fk_usuario)
        .then(resultado => {
            if (resultado.length === 0) {
                res.status(404).json({ mensagem: "Relatório não encontrado" });
            } else {
                res.json(resultado[0]);
            }
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao buscar relatório" });
        });
}

function listarRelatorios(req, res) {
    var fk_usuario = req.session.usuarioId;

    relatorioModel.listarRelatorios(fk_usuario)
        .then(resultado => {
            if (resultado.length === 0) {
                res.json({ mensagem: "Nenhum relatório criado" });
            } else {
                res.json(resultado);
            }
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro: "Erro ao listar relatórios" });
        });
}

module.exports = {
    criarRelatorio,
    atualizarQuery,
    deletarRelatorio,
    mostrarRelatorio,
    listarRelatorios
};
