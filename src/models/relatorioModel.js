var database = require("../database/config");

function criarRelatorio(nome, dataInicio, dataFinal, query, fk_usuario){
    var instrucaoSql = `INSERT INTO relatorio(nome, data_hora_criacao, data_inicio, data_final, query, fk_usuario) VALUES (
    '${nome})',
    NOW(),
    '${dataInicio}',
    '${dataFinal}',
    '${query}',
    ${fk_usuario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarQueryRelatorio(idRelatorio, novaQuery) {
    var instrucaoSql = `
        UPDATE relatorio
        SET query = ?
        WHERE id = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [novaQuery, idRelatorio]);
}

function deletarRelatorio(idRelatorio) {
    var instrucaoSql = `
        DELETE FROM relatorio
        WHERE id = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [idRelatorio]);
}

function mostrarRelatorio(idRelatorio, fk_usuario) {
    var instrucaoSql = `
        SELECT id, nome, DATE_FORMAT(data_hora_criacao, '%d/%m/%Y %H:%i') AS criado_em,
               DATE_FORMAT(data_inicio, '%d/%m/%Y') AS data_inicio,
               DATE_FORMAT(data_final, '%d/%m/%Y') AS data_final,
               query
        FROM relatorio
        WHERE id = ? AND fk_usuario = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [idRelatorio, fk_usuario]);
}

function listarRelatorios(fk_usuario) {
    var instrucaoSql = `
        SELECT id, nome, DATE_FORMAT(data_hora_criacao, '%d/%m/%Y %H:%i') AS criado_em,
               DATE_FORMAT(data_inicio, '%d/%m/%Y') AS data_inicio,
               DATE_FORMAT(data_final, '%d/%m/%Y') AS data_final,
               query
        FROM relatorio
        WHERE fk_usuario = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [fk_usuario]);
}

module.exports = {
    criarRelatorio,
    atualizarQueryRelatorio,
    deletarRelatorio,
    mostrarRelatorio,
    listarRelatorios,

};