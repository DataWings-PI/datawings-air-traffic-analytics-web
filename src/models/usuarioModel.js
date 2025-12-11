var database = require("../database/config");

function autenticar(email, senha) {
    const sql = `
        SELECT id, nome_completo, email, fk_role, fk_empresa, fk_codigo
        FROM usuario
        WHERE email = '${email}' AND senha = '${senha}';
    `;
    return database.executar(sql);
}

function cadastrar(nome, email, senha, codigoAtivacao) {

    const sqlBuscarCodigo = `
        SELECT id, fk_empresa
        FROM codigo
        WHERE token_ativacao = '${codigoAtivacao}'
          AND status = 'ativo';
    `;

    return database.executar(sqlBuscarCodigo).then(resultado => {

        if (resultado.length === 0) {
            throw "Código inválido";
        }

        const fkCodigo = resultado[0].id;
        const fkEmpresa = resultado[0].fk_empresa;
        const fkRole = 2; // usuário comum

        const sqlInsert = `
            INSERT INTO usuario (nome_completo, email, senha, fk_role, fk_empresa, fk_codigo)
            VALUES ('${nome}', '${email}', '${senha}', ${fkRole}, ${fkEmpresa}, ${fkCodigo});
        `;

        return database.executar(sqlInsert);
    });
}

function ligarDesligar(statusNotif, statusAtraso, statusCancelamento) {
    
    var instrucaoSql = `
        INSERT INTO slack (StatusNotif, statusAtraso, statusCancelamento) 
        VALUES ('${statusNotif}', '${statusAtraso}', '${statusCancelamento}');
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

/* function mudarStatus(status) {

    var instrucaoSql = `
    UPDATE slack WHERE 
    `
} */



function atualizar(id, nome, email, senha) {
    const sql = `
        UPDATE usuario
        SET nome_completo = '${nome}',
            email = '${email}',
            senha = '${senha}'
        WHERE id = ${id};
    `;

    return database.executar(sql);
}

function deletar(id) {
    const sql = `
        DELETE FROM usuario
        WHERE id = ${id};
    `;
    return database.executar(sql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizar,
    deletar,
    ligarDesligar
};
