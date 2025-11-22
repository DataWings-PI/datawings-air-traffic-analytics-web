CREATE DATABASE IF NOT EXISTS datawings;
USE datawings;



CREATE TABLE log_java (
    id INT PRIMARY KEY auto_increment, 
    data_hora_registro DATETIME NOT NULL, 
    mensagem VARCHAR(100) NOT NULL,
    categoria ENUM('ERRO', 'CARGA') NOT NULL
);

CREATE TABLE empresa (
    id INT PRIMARY KEY auto_increment,
    nome_fantasia VARCHAR(255) NOT NULL,
    razao_social VARCHAR(255) UNIQUE NOT NULL,
    cnpj VARCHAR(14) NOT NULL,
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);


CREATE TABLE voo (
    id INT PRIMARY KEY auto_increment,
    sigla_empresa CHAR(3) NOT NULL,
    numero_voo VARCHAR(5) NOT NULL,	
    codigo_autorizacao VARCHAR(2) NOT NULL,
    codigo_tipo_linha CHAR(1) NOT NULL,
    icao_origem VARCHAR(10) NOT NULL,
    icao_destino VARCHAR(10) NOT NULL,
    partida_prevista DATETIME NOT NULL,
    partida_real DATETIME NOT NULL,
    chegada_prevista DATETIME NOT NULL,
    chegada_real DATETIME NOT NULL,
    tempo_atraso INT NOT NULL,
    situacao_voo ENUM('ATRASADO', 'CANCELADO') NOT NULL,
    codigo_justificativa VARCHAR(4) NOT NULL,
    justificativa VARCHAR(200) NOT NULL,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE contato (
    id INT PRIMARY KEY auto_increment,
    departamento VARCHAR(45) NOT NULL,
    numero VARCHAR(11) NOT NULL,
    tipo_numero ENUM('fixo', 'móvel') NOT NULL,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);


CREATE TABLE endereco_empresa(
    id INT PRIMARY KEY auto_increment,
    apelido VARCHAR(45) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(50),
    bairro VARCHAR(100) NOT NULL,
    cep CHAR(8) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    uf CHAR(2) NOT NULL,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE codigo (
    id INT PRIMARY KEY auto_increment,
    token_ativacao CHAR(6) NOT NULL,
    data_validade DATE NOT NULL,
    data_criacao DATETIME NOT NULL,
    status ENUM('ativo', 'expirado') NOT NULL,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE role (
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL
);


CREATE TABLE usuario (
    id INT PRIMARY KEY auto_increment,
    nome_completo VARCHAR(200) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    fk_role INT NOT NULL,
    fk_empresa INT NOT NULL,
    fk_codigo INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id),
    FOREIGN KEY (fk_role) REFERENCES role(id),
    FOREIGN KEY (fk_codigo) REFERENCES codigo(id)
);

CREATE TABLE notificacoes (
	id INT PRIMARY KEY auto_increment,
    mensagem VARCHAR(200) NOT NULL,
    status TINYINT NOT NULL,
    data_envio DATETIME NOT NULL,
	intervalo TIME NOT NULL,
    fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE relatorio (
    id INT PRIMARY KEY auto_increment,
    nome VARCHAR(45) NOT NULL,
    data_hora_criacao DATETIME NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    query VARCHAR(255) NOT NULL,
    fk_usuario INT NOT NULL,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
