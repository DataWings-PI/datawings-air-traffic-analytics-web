#!/bin/bash
java -version #verifica versao atual do java
if [ $? = 0 ]; #se retorno for igual a 0
    then #entao,
        echo "java instalado" #print no terminal
    else #se nao,

        echo "java não instalado" #print no terminal
        echo "gostaria de instalar o java? [s/n]" #print no terminal

        read get #variável que guarda resposta do usuário
    if [ \"$get\" == \"s\" ]; #se retorno for igual a s
        then #entao
        sudo apt install openjdk-21-jre -y #executa instalacao do java
    fi #fecha o 2º if
fi #fecha o 1º if

docker --version #verifica versao atual do docker
if [ $? = 0 ]; #se retorno for igual a 0

    then #entao,
        echo "docker instalado" #print no terminal
    else #se nao,

        echo "docker não instalado" #print no terminal
        echo "gostaria de instalar o docker? [s/n]" #print no terminal

        read get #variável que guarda resposta do usuário
    if [ \"$get\" == \"s\" ]; #se retorno for igual a s
        then #entao
        sudo apt update && sudo apt upgrade -y

        sudo apt install docker.io -y #executa instalacao do docker

        sudo systemctl start docker

        sudo systemctl enable docker
    fi #fecha o 2º if
fi #fecha o 1º if


docker-compose version #verifica versao atual do docker-compose
if [ $? = 0 ]; #se retorno for igual a 0
    then #entao,
        echo "docker-compose instalado" #print no terminal
    else #se nao,

        echo "docker-compose não instalado" #print no terminal
        echo "gostaria de instalar o docker-compose? [s/n]" #print no terminal
        read get #variável que guarda resposta do usuário
    if [ \"$get\" == \"s\" ]; #se retorno for igual a s
        then #entao
        sudo apt update && sudo apt upgrade –y

        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose #executa instalacao do docker-compose

        sudo chmod +x /usr/local/bin/docker-compose

    fi #fecha o 2º if
fi #fecha o 1º if


nodejs -v #verifica versao atual do nodeJs
if [ $? = 0 ]; #se retorno for igual a 0
    then #entao,
        echo "node instalado" #print no terminal
    else #se nao,

        echo "node não instalado" #print no terminal

        echo "gostaria de instalar o node? [s/n]" #print no terminal

        read get #variável que guarda resposta do usuário
    if [ \"$get\" == \"s\" ]; #se retorno for igual a s
        then #entao
        sudo apt update && sudo apt upgrade –y

        sudo curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

        sudo apt install -y nodejs

    fi #fecha o 2º if
fi #fecha o 1º if

# ls | grep datawings-air-traffic-ETL-Logs #verifica se tem o repositório
# if [ $? = 0 ]; #se retorno for igual a 1
#     then #entao,
#         echo "repositório do java clonado" #print no terminal
#     else #se nao,
#         echo "repositório do java não esta clonado" #print no terminal
        
#         echo "gostaria de clonar o repositório datawings-air-traffic-ETL-Logs? [s/n]" #print no terminal

#         read get #variável que guarda resposta do usuário
#     if [ \"$get\" == \"s\" ]; #se retorno for igual a s
#         then #entao
#         git clone https://github.com/DataWings-PI/datawings-air-traffic-ETL-Logs.git

#     fi #fecha o 2º if
# fi #fecha o 1º if


ls | grep datawings-air-traffic-analytics-web #verifica se tem o repositório do site
if [ $? = 0 ]; #se retorno for igual a 1
    then #entao,
        echo "repositório do site clonado" #print no terminal
    else #se nao,
        echo "repositório do site não esta clonado" #print no terminal
        
        echo "gostaria de clonar o repositório datawings-air-traffic-analytics-web? [s/n]" #print no terminal

        read get #variável que guarda resposta do usuário
    if [ \"$get\" == \"s\" ]; #se retorno for igual a s
        then #entao
        git clone https://github.com/DataWings-PI/datawings-air-traffic-analytics-web.git

    fi #fecha o 2º if
fi #fecha o 1º if