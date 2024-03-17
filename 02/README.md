# Projeto: Cronômetro API

Este é um projeto de API de cronômetro desenvolvido em Node.js usando o framework Express. A API permite iniciar, pausar, continuar, zerar e visualizar o tempo decorrido do cronômetro.

## Como Usar

### Pré-requisitos

- Node.js instalado no seu sistema.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/marcopezzote/exercicios-backend-primeiro-servidor.git

    Navegue até o diretório do projeto:

    bash

cd nome-do-repositorio

Instale as dependências:

bash

    npm install

Execução

    Inicie o servidor:

    bash

    node index.js

    Acesse a API em http://localhost:8000/.

Endpoints da API

    GET /: Retorna o tempo atual do cronômetro.
    GET /iniciar: Inicia o cronômetro.
    GET /pausar: Pausa o cronômetro.
    GET /continuar: Continua a contagem do cronômetro, se estiver pausado.
    GET /zerar: Zera o cronômetro.

Exemplo de Uso

Para iniciar o cronômetro, faça uma solicitação GET para /iniciar:

bash

curl http://localhost:8000/iniciar

Para pausar o cronômetro, faça uma solicitação GET para /pausar:

bash

curl http://localhost:8000/pausar

E assim por diante para os outros endpoints.
Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues se encontrar algum problema.
