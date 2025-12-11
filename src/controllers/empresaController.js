var empresaModel = require("../models/empresaModel");


function listarEmpresas(req, res) {
    empresaModel.listarEmpresas()
        .then((resultado) => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma empresa encontrada!");
            }
        })
        .catch((erro) => {
            console.log("Erro ao buscar empresas:", erro);
            res.status(500).json(erro.sqlMessage);
        });
};

function cadastrarEmpresa(req, res) {
    var nome_fantasia = req.body.nome_fantasiaServer;
    var razao_social = req.body.razao_socialServer;
    var cnpj = req.body.cnpjServer;
    var status = req.body.statusServer;
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
    } else if (status == undefined) {
        res.status(400).send("Seu status está undefined!");
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
    } else {

        empresaModel.cadastrarEmpresa(nome_fantasia, razao_social, cnpj, status, departamento, numero, tipo_num, apelido, cep, logradouro, bairro, cidade, uf, numeroEndereco, complemento)
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

function adicionarEndCont(req, res) {
    const fk_empresa = req.body.fk_empresa;
    const departamento = req.body.departamento;
    const numero = req.body.numero;
    const tipo_num = req.body.tipo_num;
    const apelido = req.body.apelido;
    const cep = req.body.cep;
    const logradouro = req.body.logradouro;
    const bairro = req.body.bairro;
    const cidade = req.body.cidade;
    const uf = req.body.uf;
    const numeroEndereco = req.body.numeroEndereco;
    const complemento = req.body.complemento;

    // Validações
    if (!fk_empresa) {
        return res.status(400).json({ error: "fk_empresa está undefined!" });
    }
    if (!departamento) {
        return res.status(400).json({ error: "departamento está undefined!" });
    }
    if (!numero) {
        return res.status(400).json({ error: "numero está undefined!" });
    }
    if (!tipo_num) {
        return res.status(400).json({ error: "tipo_num está undefined!" });
    }
    if (!apelido) {
        return res.status(400).json({ error: "apelido está undefined!" });
    }
    if (!cep) {
        return res.status(400).json({ error: "cep está undefined!" });
    }

    empresaModel.adicionarEndCont(
        departamento,
        numero,
        tipo_num,
        apelido,
        cep,
        logradouro,
        bairro,
        cidade,
        uf,
        numeroEndereco,
        complemento,
        fk_empresa
    )
    .then((resultado) => {
        res.status(201).json({ message: "Dados cadastrados com sucesso!" });
    })
    .catch((erro) => {
        console.log("Erro ao adicionar End/Cont:", erro);
        res.status(500).json({ error: erro.sqlMessage || "Erro interno do servidor" });
    });
}

function mostrarDadosEmpresa(req, res) {
    const id = req.params.id;
    
    if (!id) {
        return res.status(400).json({ error: "ID da empresa não fornecido!" });
    }

    empresaModel.buscarEmpresaPorId(id)
        .then((empresa) => {
            if (!empresa || empresa.length === 0) {
                return res.status(404).json({ error: "Empresa não encontrada!" });
            }
            
            return Promise.all([
                empresaModel.buscarContatosPorEmpresa(id),
                empresaModel.buscarEnderecosPorEmpresa(id)
            ]).then(([contatos, enderecos]) => {
                res.status(200).json({
                    empresa: empresa[0],
                    contatos: contatos,
                    enderecos: enderecos
                });
            });
        })
        .catch((erro) => {
            console.log("Erro ao buscar dados da empresa:", erro);
            res.status(500).json({ error: erro.sqlMessage || "Erro interno do servidor" });
        });
}


function atualizarStatus(req, res) {
    var id = req.params.id;
    empresaModel.atualizarStatus(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao atualizar o status! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
};


function deletarEmpresa(req, res) {
    var id = req.params.id;
    empresaModel.deletarEmpresa(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao deletar a empresa! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            });
};


module.exports = {
    listarEmpresas,
    cadastrarEmpresa,
    atualizarStatus,
    deletarEmpresa,
    adicionarEndCont,
    mostrarDadosEmpresa
}