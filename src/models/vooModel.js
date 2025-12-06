var database = require("../database/config");


function buscarKpi1(fkEmpresa) {
    var instrucaoSql = `
    SELECT 
    COUNT(*) AS total_voos
    FROM voo AS v WHERE fk_empresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpi2(fkEmpresa) {
    var instrucaoSql = `
    SELECT 
    COUNT(*) AS voos_sem_atraso,
    CONCAT(ROUND(COUNT(*) / (SELECT COUNT(*) FROM voo) * 100, 2), '%') AS porcentagem
    FROM voo
    WHERE tempo_atraso = 0 
    AND situacao_voo <> 'CANCELADO' AND fk_empresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpi3(fkEmpresa) {
    var instrucaoSql = `
    SELECT 
    COUNT(*) AS voos_com_atraso,
    CONCAT(ROUND(COUNT(*) / (SELECT COUNT(*) FROM voo) * 100, 2), '%') AS porcentagem
    FROM voo
    WHERE tempo_atraso > 0
    AND situacao_voo <> 'CANCELADO' AND fk_empresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpi4(fkEmpresa) {
    var instrucaoSql = `
    SELECT 
    COUNT(*) AS voos_cancelados,
    CONCAT(ROUND(COUNT(*) / (SELECT COUNT(*) FROM voo) * 100, 2), '%') AS porcentagem
    FROM voo
    WHERE situacao_voo = 'CANCELADO' AND fk_empresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function buscarJustificativas(fkEmpresa) {
    var instrucaoSql = `
    SELECT  codigo_justificativa, COUNT(*) AS qtd_vezes
    FROM voo
    WHERE tempo_atraso > 0 AND fk_empresa = ${fkEmpresa}
    GROUP BY codigo_justificativa 
    ORDER BY qtd_vezes DESC
    LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarDesempenho(fkEmpresa) {
    var instrucaoSql = `
    SELECT
    CONCAT(uf_origem, ' / ', uf_destino) AS rota,
    COUNT(*) AS quantidade_atrasos,
    TRUNCATE(AVG(tempo_atraso), 0) AS media_atraso
    FROM voo
    WHERE tempo_atraso > 0 AND fk_empresa = ${fkEmpresa}
    GROUP BY uf_origem, uf_destino
    ORDER BY quantidade_atrasos DESC
    LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarVoos(fkEmpresa) {
    var instrucaoSql = `
    SELECT numero_voo, DATE_FORMAT(partida_prevista, '%d/%m/%Y') AS data_prevista, DATE_FORMAT(partida_prevista, '%H:%i') AS previsao_partida, DATE_FORMAT(chegada_prevista, '%H:%i') AS previsao_chegada, DATE_FORMAT(partida_real, '%H:%i') AS partida, DATE_FORMAT(chegada_real, '%H:%i') AS chegada,
    TIMESTAMPDIFF(MINUTE, chegada_prevista, chegada_real) AS atraso_chegada, TIMESTAMPDIFF(MINUTE, partida_prevista, partida_real) AS atraso_partida, tempo_atraso AS atraso_total, uf_origem AS origem,
    uf_destino AS destino, codigo_justificativa FROM voo WHERE fk_empresa = ${fkEmpresa} ORDER BY id DESC LIMIT 100;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarKpi1,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarJustificativas,
    buscarDesempenho,
    buscarVoos

};