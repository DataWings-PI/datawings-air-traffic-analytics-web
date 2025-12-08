var database = require("../database/config");

function criarRelatorio(nome, dataInicio, dataFinal, fk_usuario) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    const querySql = `SELECT * FROM voo WHERE fk_empresa = ${fk_usuario} AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'`;
    
    var instrucaoSql = `INSERT INTO relatorio (nome, data_hora_criacao, data_inicio, data_final, query, fk_usuario)
        VALUES ('${nome}', NOW(), '${dataInicioMySQL}', '${dataFinalMySQL}', '${querySql.replace(/'/g, "''")}', ${fk_usuario})`;
    
    console.log("Criando relatório:", { nome, dataInicio, dataFinal, fk_usuario });
    console.log("Datas:", { dataInicioMySQL, dataFinalMySQL });
    console.log("Query SQL:", querySql);
    console.log("Instrução SQL completa:", instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizarRelatorio(idRelatorio, nome, dataInicio, dataFinal, fk_usuario) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    const querySql = `SELECT * FROM voo WHERE fk_empresa = ${fk_usuario} AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'`;
    
    var instrucaoSql = `UPDATE relatorio
        SET nome = '${nome}', data_inicio = '${dataInicioMySQL}', data_final = '${dataFinalMySQL}', query = '${querySql.replace(/'/g, "''")}'
        WHERE id = ${idRelatorio}`;
    
    console.log("Atualizando relatório:", { idRelatorio, nome, dataInicio, dataFinal, fk_usuario });
    return database.executar(instrucaoSql);
}

function deletarRelatorio(idRelatorio) {
    var instrucaoSql = `DELETE FROM relatorio WHERE id = ${idRelatorio}`;
    console.log("Deletando relatório:", idRelatorio);
    return database.executar(instrucaoSql);
}

function mostrarRelatorio(idRelatorio, fk_usuario) {
    const instrucaoSql = `SELECT id, nome,
        DATE_FORMAT(data_hora_criacao, '%d/%m/%Y %H:%i') AS criado_em,
        DATE_FORMAT(data_inicio, '%d/%m/%Y') AS data_inicio,
        DATE_FORMAT(data_final, '%d/%m/%Y') AS data_final,
        query
        FROM relatorio
        WHERE id = ${idRelatorio} AND fk_usuario = ${fk_usuario}`;
    
    console.log("Buscando relatório:", { idRelatorio, fk_usuario });
    return database.executar(instrucaoSql);
}

function listarRelatorios(fk_usuario) {
    var instrucaoSql = `SELECT id, nome,
        DATE_FORMAT(data_hora_criacao, '%d/%m/%Y %H:%i') AS criado_em,
        DATE_FORMAT(data_inicio, '%d/%m/%Y') AS data_inicio,
        DATE_FORMAT(data_final, '%d/%m/%Y') AS data_final
        FROM relatorio
        WHERE fk_usuario = ${fk_usuario}
        ORDER BY data_hora_criacao DESC`;
    
    console.log("Listando relatórios para usuário:", fk_usuario);
    return database.executar(instrucaoSql);
}

function buscarKpi1(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT 
        COUNT(*) AS total_voos
        FROM voo 
        WHERE fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'`;
    
    console.log("KPI 1 com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
}

function buscarKpi2(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT 
        COUNT(*) AS voos_sem_atraso,
        CONCAT(ROUND(COUNT(*) / (SELECT COUNT(*) FROM voo WHERE fk_empresa = ${fkEmpresa} AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}') * 100, 2), '%') AS porcentagem
        FROM voo
        WHERE tempo_atraso = 0 
        AND situacao_voo <> 'CANCELADO' 
        AND fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'`;
    
    console.log("KPI 2 com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
}

function buscarKpi3(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT 
        COUNT(*) AS voos_com_atraso,
        CONCAT(ROUND(COUNT(*) / (SELECT COUNT(*) FROM voo WHERE fk_empresa = ${fkEmpresa} AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}') * 100, 2), '%') AS porcentagem
        FROM voo
        WHERE tempo_atraso > 0
        AND situacao_voo <> 'CANCELADO' 
        AND fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'`;
    
    console.log("KPI 3 com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
}

function buscarKpi4(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT 
        COUNT(*) AS voos_cancelados,
        CONCAT(ROUND(COUNT(*) / (SELECT COUNT(*) FROM voo WHERE fk_empresa = ${fkEmpresa} AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}') * 100, 2), '%') AS porcentagem
        FROM voo
        WHERE situacao_voo = 'CANCELADO' 
        AND fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'`;
    
    console.log("KPI 4 com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
}

function buscarJustificativas(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT  codigo_justificativa, COUNT(*) AS qtd_vezes
        FROM voo
        WHERE tempo_atraso > 0 
        AND fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'
        GROUP BY codigo_justificativa 
        ORDER BY qtd_vezes DESC
        LIMIT 10`;
    
    console.log("Justificativas com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
}

function buscarDesempenho(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT
        CONCAT(uf_origem, ' / ', uf_destino) AS rota,
        COUNT(*) AS quantidade_atrasos,
        TRUNCATE(AVG(tempo_atraso), 0) AS media_atraso
        FROM voo
        WHERE tempo_atraso > 0 
        AND fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'
        GROUP BY uf_origem, uf_destino
        ORDER BY quantidade_atrasos DESC
        LIMIT 10`;
    
    console.log("Desempenho com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
}

function buscarVoos(fkEmpresa, dataInicio, dataFinal) {
    const dataInicioMySQL = dataInicio;
    const dataFinalMySQL = dataFinal;
    
    var instrucaoSql = `SELECT numero_voo, 
        DATE_FORMAT(partida_prevista, '%d/%m/%Y') AS data_prevista, 
        DATE_FORMAT(partida_prevista, '%H:%i') AS previsao_partida, 
        DATE_FORMAT(chegada_prevista, '%H:%i') AS previsao_chegada, 
        DATE_FORMAT(partida_real, '%H:%i') AS partida, 
        DATE_FORMAT(chegada_real, '%H:%i') AS chegada,
        TIMESTAMPDIFF(MINUTE, chegada_prevista, chegada_real) AS atraso_chegada, 
        TIMESTAMPDIFF(MINUTE, partida_prevista, partida_real) AS atraso_partida, 
        tempo_atraso AS atraso_total, 
        uf_origem AS origem,
        uf_destino AS destino, 
        codigo_justificativa 
        FROM voo 
        WHERE fk_empresa = ${fkEmpresa} 
        AND DATE(partida_prevista) BETWEEN '${dataInicioMySQL}' AND '${dataFinalMySQL}'
        ORDER BY id DESC 
        LIMIT 100`;
    
    console.log("Voos com filtro:", { fkEmpresa, dataInicio, dataFinal });
    return database.executar(instrucaoSql);
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
    buscarVoos
};