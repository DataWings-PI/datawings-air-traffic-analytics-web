// Define ambiente
// var ambiente_processo = 'desenvolvimento';
var ambiente_processo = 'producao';
var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var mysql = require("mysql2/promise");

var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var empresasRouter = require("./src/routes/empresas");
var voosRouter = require("./src/routes/voos");
var relatorioRouter = require("./src/routes/relatorio");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/empresas", empresasRouter);
app.use("/voos", voosRouter);
app.use("/relatorios", relatorioRouter);

// Conexão com banco
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Endpoint para mostrar relatório específico
app.get("/relatorios/mostrar/:id", async (req, res) => {
    const { id } = req.params;
    const fk_usuario = req.query.fk_usuario;

    if (!id || !fk_usuario) {
        return res.status(400).json({ error: "ID e fk_usuario são obrigatórios" });
    }

    try {
        const [rows] = await db.execute(
            "SELECT id, nome, DATE_FORMAT(data_inicio, '%Y-%m-%d') AS data_inicio, DATE_FORMAT(data_final, '%Y-%m-%d') AS data_final, query FROM relatorios WHERE id = ? AND fk_usuario = ?",
            [id, fk_usuario]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "Relatório não encontrado" });
        }

        res.json(rows[0]);
    } catch (error) {
        console.error("Erro ao buscar relatório:", error);
        res.status(500).json({ error: "Erro interno ao buscar relatório" });
    }
});

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
                                                                                                 
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
