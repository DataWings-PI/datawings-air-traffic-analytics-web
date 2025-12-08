const relatorioModel = require("../models/relatorioModel");

function criarRelatorio(req, res) {
    const { nome, dataInicio, dataFinal, fk_usuario } = req.body;

    if (!nome || !dataInicio || !dataFinal || !fk_usuario) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    relatorioModel.criarRelatorio(nome, dataInicio, dataFinal, fk_usuario)
        .then(resultado => {
            res.status(201).json({ mensagem: "Relatório criado com sucesso", id: resultado.insertId });
        })
        .catch(erro => {
            console.error("Erro ao criar relatório:", erro);
            res.status(500).json({ erro: "Erro ao criar relatório", detalhes: erro.sqlMessage || erro.message });
        });
}

function atualizarRelatorio(req, res){
    const { idRelatorio, nome, dataInicio, dataFinal } = req.body;
    
    relatorioModel.atualizarRelatorio(idRelatorio, nome, dataInicio, dataFinal)
        .then(() => res.json({ mensagem: "Relatório atualizado com sucesso" }))
        .catch(erro => {
            console.error("Erro ao atualizar relatório:", erro);
            res.status(500).json({ erro: "Erro ao atualizar relatório" });
        });
}

function deletarRelatorio(req, res) {
    const idRelatorio = req.params.id;

    relatorioModel.deletarRelatorio(idRelatorio)
        .then(() => res.json({ mensagem: "Relatório deletado com sucesso" }))
        .catch(erro => {
            console.error("Erro ao deletar relatório:", erro);
            res.status(500).json({ erro: "Erro ao deletar relatório" });
        });
}

function mostrarRelatorio(req, res) {
    const idRelatorio = req.params.id;
    const fk_usuario = req.query.fk_usuario || 1;

    relatorioModel.mostrarRelatorio(idRelatorio, fk_usuario)
        .then(resultado => {
            if (!resultado || resultado.length === 0) {
                return res.status(404).json({ mensagem: "Relatório não encontrado" });
            }
            res.json(resultado[0]);
        })
        .catch(erro => {
            console.error("Erro ao buscar relatório:", erro);
            res.status(500).json({ erro: "Erro ao buscar relatório" });
        });
}

function listarRelatorios(req, res) {
    const fk_usuario = req.params.fk_usuario;

    relatorioModel.listarRelatorios(fk_usuario)
        .then(resultado => res.json(resultado || []))
        .catch(erro => {
            console.error("Erro no listarRelatorios:", erro);
            res.status(500).json({ erro: "Erro ao listar relatórios" });
        });
}

function buscarKpi1(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarKpi1(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro no KPI 1:", erro);
            res.status(500).json({ erro: "Erro ao buscar KPI 1" });
        });
}

function buscarKpi2(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarKpi2(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro no KPI 2:", erro);
            res.status(500).json({ erro: "Erro ao buscar KPI 2" });
        });
}

function buscarKpi3(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarKpi3(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro no KPI 3:", erro);
            res.status(500).json({ erro: "Erro ao buscar KPI 3" });
        });
}

function buscarKpi4(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarKpi4(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro no KPI 4:", erro);
            res.status(500).json({ erro: "Erro ao buscar KPI 4" });
        });
}

function buscarJustificativas(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarJustificativas(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro nas justificativas:", erro);
            res.status(500).json({ erro: "Erro ao buscar justificativas" });
        });
}

function buscarDesempenho(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarDesempenho(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro no desempenho:", erro);
            res.status(500).json({ erro: "Erro ao buscar desempenho" });
        });
}

function buscarVoos(req, res) {
    const fkEmpresa = req.params.fkEmpresa;
    const { dataInicio, dataFinal } = req.query;

    relatorioModel.buscarVoos(fkEmpresa, dataInicio, dataFinal)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro nos voos:", erro);
            res.status(500).json({ erro: "Erro ao buscar voos" });
        });
}

function buscarDashboardPorRelatorio(req, res) {
    const idRelatorio = req.params.idRelatorio;
    const fk_usuario = req.query.fk_usuario;

    relatorioModel.mostrarRelatorio(idRelatorio, fk_usuario)
        .then(relatorio => {
            if (relatorio.length === 0) {
                throw new Error("Relatório não encontrado");
            }
            
            const relatorioData = relatorio[0];
            const dataInicio = relatorioData.data_inicio;
            const dataFinal = relatorioData.data_final;
            const fkEmpresa = fk_usuario;

            return Promise.all([
                relatorioModel.buscarKpi1(fkEmpresa, dataInicio, dataFinal),
                relatorioModel.buscarKpi2(fkEmpresa, dataInicio, dataFinal),
                relatorioModel.buscarKpi3(fkEmpresa, dataInicio, dataFinal),
                relatorioModel.buscarKpi4(fkEmpresa, dataInicio, dataFinal),
                relatorioModel.buscarJustificativas(fkEmpresa, dataInicio, dataFinal),
                relatorioModel.buscarDesempenho(fkEmpresa, dataInicio, dataFinal),
                relatorioModel.buscarVoos(fkEmpresa, dataInicio, dataFinal)
            ]).then(([kpi1, kpi2, kpi3, kpi4, justificativas, desempenho, voos]) => ({
                relatorio: relatorioData,
                dashboard: {
                    kpi1: kpi1[0] || {},
                    kpi2: kpi2[0] || {},
                    kpi3: kpi3[0] || {},
                    kpi4: kpi4[0] || {},
                    justificativas: justificativas,
                    desempenho: desempenho,
                    voos: voos
                }
            }));
        })
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro na dashboard por relatório:", erro);
            res.status(500).json({ erro: erro.message });
        });
}

module.exports = {
    criarRelatorio,
    atualizarRelatorio,
    deletarRelatorio,
    mostrarRelatorio,
    listarRelatorios,
    buscarKpi1,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarJustificativas,
    buscarDesempenho,
    buscarVoos,
    buscarDashboardPorRelatorio
};