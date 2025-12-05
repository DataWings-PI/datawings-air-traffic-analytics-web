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

module.exports = {
    buscarKpi1,
    buscarKpi2,
    buscarKpi3,
    buscarKpi4,
    buscarJustificativas

};