const usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    const email = req.body.email;
    const senha = req.body.senha;

    if (!email) return res.status(400).send("Email está indefinido!");
    if (!senha) return res.status(400).send("Senha está indefinida!");

    usuarioModel.autenticar(email, senha)
        .then(resultado => {
            if (resultado.length === 1) {
                const usuario = resultado[0];

                return res.json({
                    id: usuario.id,
                    nome: usuario.nome_completo,
                    email: usuario.email,
                    fk_role: usuario.fk_role,
                    fk_empresa: usuario.fk_empresa,
                    fk_codigo: usuario.fk_codigo
                });
            }

            if (resultado.length == 0) {
                return res.status(403).send("Email e/ou senha inválidos!");
            }

        })
        .catch(erro => {
            console.log("Erro ao autenticar:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const codigoEmpresa = req.body.codigoEmpresa; // <- certo!

    if (!nome) return res.status(400).send("Nome está indefinido!");
    if (!email) return res.status(400).send("Email está indefinido!");
    if (!senha) return res.status(400).send("Senha está indefinida!");
    if (!codigoEmpresa) return res.status(400).send("Código de ativação está indefinido!");

    usuarioModel.cadastrar(nome, email, senha, codigoEmpresa)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log("Erro ao cadastrar:", erro);
            res.status(500).json(erro.sqlMessage || erro);
        });
}

function ligarDesligar(req, res) {
    var statusNotif = req.body.statusServer;
    var statusAtraso = req.body.atrasoServer;
    var statusCancelamento = req.body.cancelServer;

    if (statusNotif == undefined) {
        res.status(400).send("O campo não pode estar em branco");
    } else if (statusAtraso == undefined || statusCancelamento == undefined) {
        res.status(400).send("Selecione ao menos um tipo de notificação.");
    } else {
        // Envia para o model
        usuarioModel.ligarDesligar(statusNotif, statusAtraso, statusCancelamento)
            .then(function (resultado) {
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao determinar os parâmetros. Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    autenticar,
    cadastrar,
    ligarDesligar
};
