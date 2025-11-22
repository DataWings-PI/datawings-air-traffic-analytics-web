var empresaModel =  require("../models/empresaModel");


function listarEmpresas(req, res) {
    empresaModel.listarEmpresas()
        .then((resultado) => {
            if (resultado.length > 0) {
                // Sucesso: retorna as empresas encontradas
                res.status(200).json(resultado);
            } else {
                // Nenhuma empresa no banco
                res.status(204).send("Nenhuma empresa encontrada!");
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar empresas:", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarEmpresas,
};