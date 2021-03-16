![Eva Hort-Frut](https://user-images.githubusercontent.com/50267081/111349282-c29cc080-865f-11eb-92fd-598380748420.png)

<h1 align="center">
     Eva Hort-Frut API
</h1>

<h3 align="center">
    🍎 Uma API de usu simples para o melhor controle se seu hort-frut. 🐍
</h3>

<h4 align="center">
	Em constante evolução.
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Criando o Banco de Dados](#user-content--criando-o-banco-de-dados)
     * [Rodando o Backend](#user-content--rodando-o-backend)
   * [Tecnologias](#-tecnologias)
     * [Server](#user-content-server--nodejs----typescript)
   * [Autor](#-autor)
<!--te-->


## 💻 Sobre o projeto

Api para cadastro de usuários e produtos desenvolvida como projeto para demonstração de minhas habilidades em desenvolvimento focado em backend.

---

## ⚙️Funcionalidades

- [x] Cadastro de usuários informando:
  - [x] nome
  - [x] e-mail
  - [x] e senha
- [x] Login e autenticação via: 
  - [x] e-mail
  - [x] e senha
- [x] Exclusão de usuário via confirmação senha
- [x] Cadastro de Produtos com os campos:
  - [x] nome
  - [x] descrição
  - [x] preço
  - [x] e a URL de até 3 imagens
- [x] Os usuários precisam estar logados para ter acesso as rotas de prosutos, onde podem:
  - [x] Cadastrar novos produtos
  - [x] Listar todos os produtos já cadastrados
  - [x] Procurar por um produto especifico
  - [x] Atualizar o cadastro de algum produto
  - [x] Deletar o cadastro de algum produto

---

## Como executar o projeto

Para executar o projeto é preciso seguir alguns passos.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/download/). 
Além disto é necessário que possua uma ferramenta para testar serviços RESTful (Web APIs) por meio do envio de requisições HTTP como o [Postman](https://www.postman.com/downloads/) ou o [Insomnia](https://insomnia.rest/download)

#### 🎲 Criando o Banco de Dados

```bash

# Acesse o seu Postgre pelo terminal/cmd com o comando
$ psql -U seuUsuárioPostgres

# Crie o banco que vamos utilizar na aplicação
$ CREATE DATABASE eva_hortfrut; 

```

#### ⚙️ Rodando o Backend

```bash

# Clone este repositório
$ git clone git@github.com:LeonardoSAfonso/EvaHortifruti.git

# Acesse a pasta do projeto no terminal/cmd
$ cd evahortifruti

# Vá para a pasta backend
$ cd backend

# Edite o arquivo knexfile.js, pode utilizar qualquer editor de código ou ainda utilizar o bloco de notas.
$ Altere os campos 'user' e 'password' para que fiquem conforme o usuário e senha configurados em seu Postgre

![image](https://user-images.githubusercontent.com/50267081/111364125-9be68600-866f-11eb-8c9e-daf79d22857d.png)

# Em seu terminal/cmd instale as dependências
$ npm install

# Execute as migrations do projeto
$ npx knex migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

####**Server**  ([NodeJS](https://nodejs.org/en/)  +  [JavaScript](https://www.javascript.com/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[PostgreSQL](https://www.postgresql.org/download/)**
-   **[BcryptJS](https://github.com/shaneGirish/bcrypt-nodejs)**
-   **[JsonWebToken](https://github.com/auth0/node-jsonwebtoken)**


> Veja o arquivo  [package.json](https://github.com/LeonardoSAfonso/EvaHortifruti/blob/main/backend/package.json)

#### **Utilitários**

-   Teste de API:  **[Insomnia](https://insomnia.rest/)**

---

## Autor

[Leonardo Afonso](https://github.com/LeonardoSAfonso)
 
[![outlook Badge](https://img.shields.io/badge/-leonardo.s_afonsomail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leonardo.s_afonso@hotimail.com)](mailto:leonardo.s_afonso@hotimail.com)

---
