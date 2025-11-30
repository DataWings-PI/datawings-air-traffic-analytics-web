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

module.exports = {
    autenticar,
    cadastrar
};
