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
function cadastrarEmpresa(req, res) {
    var nome_fantasia = req.body.nome_fantasiaServer;
    var razao_social = req.body.razao_socialServer;
    var cnpj = req.body.cnpjServer;
    var numero = req.body.numeroServer;
    var tipo_num = req.body.tipo_numServer;
    var departamento = req.body.departamentoServer;
    var apelido = req.body.apelidoServer;
    var cep = req.body.cepServer;
    var logradouro = req.body.logradouroServer;
    var bairro = req.body.bairroServer;
    var cidade = req.body.cidadeServer;
    var uf = req.body.ufServer;
    var numeroEndereco = req.body.numeroEnderecoServer;
    var complemento = req.body.complementoServer;
    

    if (nome_fantasia == undefined) {
        res.status(400).send("Seu nome fantasia está undefined!");
    } else if (razao_social == undefined) {
        res.status(400).send("Sua razão social está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (tipo_num == undefined) {
        res.status(400).send("Seu tipo numero está undefined!");
    } else if (departamento == undefined) {
        res.status(400).send("Seu departamento está undefined!");
    } else if (apelido == undefined) {
        res.status(400).send("Seu apelido está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (uf == undefined) {
        res.status(400).send("Sua uf está undefined!");
    } else if (numeroEndereco == undefined) {
        res.status(400).send("Seu numero do endereço está undefined!");
    } else if (complemento == undefined) {
        res.status(400).send("Seu complemento está undefined!");
    }else {

        empresaModel.cadastrarEmpresa(nome_fantasia, razao_social, cnpj, departamento, numero, tipo_num, apelido, cep, logradouro, bairro, cidade, uf, numeroEndereco, complemento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    listarEmpresas,
  cadastrarEmpresa
}