var database = require("../database/config")

function listarEmpresas () {
        var instrucaoSql = `
            SELECT id, razao_social, data_criacao, status FROM empresa;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}


module.exports = {
    listarEmpresas
};