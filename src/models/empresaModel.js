var database = require("../database/config")

function listarEmpresas () {
        var instrucaoSql = `
            SELECT id, razao_social, data_criacao, status FROM empresa;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
};

function cadastrarEmpresa(nome_fantasia, razao_social, cnpj, status, departamento, numero, tipo_num, apelido, cep, logradouro, bairro, cidade, uf, numeroEndereco, complemento) {
    var instrucaoSql = `
       INSERT INTO empresa (nome_fantasia, razao_social, cnpj, status)
       VALUES ('${nome_fantasia}', '${razao_social}', '${cnpj}', ${status});
   `;
   console.log("Executando o INSERT: \n" + instrucaoSql);
   return database.executar(instrucaoSql)
       .then(() => {
           var instrucaoSelect = `
               SELECT id FROM empresa
               WHERE razao_social = '${razao_social}';
           `;

           console.log("Executando o SELECT: \n" + instrucaoSelect);
           return database.executar(instrucaoSelect)
           .then((fk_empresa) => {
            const fkEmpresa = fk_empresa[0].id;
            var instrucaoInsert = `
                INSERT INTO contato (departamento, numero, tipo_numero, fk_empresa)
                VALUES('${departamento}', '${numero}', '${tipo_num}', '${fk_empresa[0].id}')
            `;
            console.log("Executando o INSERT: \n" + instrucaoInsert);
            return database.executar(instrucaoInsert)
            .then(()=> {

                var instrucaoInsertEndereco = `
                INSERT INTO endereco_empresa (apelido, cep, logradouro, bairro, cidade, uf,
                numero, complemento, fk_empresa)
                VALUES('${apelido}', '${cep}', '${logradouro}', '${bairro}'
                , '${cidade}', '${uf}', '${numeroEndereco}', '${complemento}', '${fkEmpresa}')
            `;
            console.log("Executando o INSERT: \n" + instrucaoInsertEndereco);
            return database.executar(instrucaoInsertEndereco)
            })
        });
       })
}


function atualizarStatus(id) {
    var instrucaoSql = `
        SELECT status FROM empresa WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    .then((status) =>{
        if(status[0].status == 1){
            var instrucaoSql = `
            UPDATE empresa SET status = FALSE WHERE id = ${id};
        `;
        }else{
            var instrucaoSql = `
            UPDATE empresa SET status = TRUE WHERE id = ${id};
        `;
        }
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
    });
};


function deletarEmpresa(id){
    var instrucaoSql = `
    DELETE FROM empresa WHERE id = ${id}; 
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}


module.exports = {
    listarEmpresas,
    cadastrarEmpresa,
    atualizarStatus,
    deletarEmpresa
};