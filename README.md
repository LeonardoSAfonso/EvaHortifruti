![Eva Hort-Frut](https://user-images.githubusercontent.com/50267081/111349282-c29cc080-865f-11eb-92fd-598380748420.png)

<h1 align="center">
     Eva HortiFrúti API
</h1>

<h3 align="center">
    🍎 Uma API de uso simples para o melhor controle se seu hortifrúti. 🐍
</h3>

<h4 align="center">
	Em constante evolução.
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto-)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Criando o Banco de Dados](#user-content--criando-o-banco-de-dados)
     * [Rodando o Backend](#user-content--rodando-o-backend)
   * [Tecnologias](#-tecnologias)
     * [Server](#user-content-server--nodejs----typescript)
   * [Autor](#-autor)
<!--te-->


## 🔵 Sobre o projeto 🔵

Api para cadastro de usuários e produtos desenvolvida como projeto para demonstração de minhas habilidades em desenvolvimento focado em backend.

---

## ⚙️ Funcionalidades

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
$ CREATE DATABASE eva_hortifruti; 

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
```
![image](https://user-images.githubusercontent.com/50267081/111364125-9be68600-866f-11eb-8c9e-daf79d22857d.png)
``` bash
# Em seu terminal/cmd instale as dependências
$ npm install

# Execute as migrations do projeto
$ npx knex migrate:latest

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

#### Utilizando a API

Para utilizar a API Eva HortiFruti basta inicir um novo projeto sua ferramenta de teste de API e adicionar a URL padrão http://localhost:3333. 
Para efetuar as operações disponíveis siga os passos abaixo.

##### Cadastro de Usuário 

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /registro a sua URL padrão
# Selecione o método POST e o body como JSON
# Adicione os campos abaixo e seus respectivos valores
$ 
{
	"name": "String",
	"email": "String",
	"password": "String"
}

# Envie a requisição
# A API lhe retornará o nome, email e id do usuário já registrado e informará o token de acesso às operações referentes ao Produtos.
```
![image](https://user-images.githubusercontent.com/50267081/111527970-4d082180-873f-11eb-8a00-900eb8a29680.png)


##### Login de usuário
Caso já possua um usuário cadastrado é necessário efetuar o login para receber o token de acesso às operações referentes ao Produtos..
``` bash
# Em sua ferramenta de teste de API adicione o sufixo /login a sua URL padrão
# Selecione o método POST e o body como JSON
# Adicione os campos abaixo e seus respectivos valores
$ 
{
	"email": "String",
	"password": "String"
}

# Envie a requisição
# A API lhe retornará o email e id do usuário e informará o token de acesso.
``` 
![image](https://user-images.githubusercontent.com/50267081/111528294-bab44d80-873f-11eb-835c-bd1b264d731c.png)


##### Exclusão de usuário

Caso deseje excluir um usuário é necessário efetuar o login em sua conta e informar o token de acesso.

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /deleteUser a sua URL padrão
# Em sua ferramenta de teste de API adicione o header Authorization e no valor adicione o texto 'Bearer ' e seu token de acesso.
```
![image](https://user-images.githubusercontent.com/50267081/111528901-4d54ec80-8740-11eb-87ac-ccdce6b92340.png)
```bash
# Selecione o método Delete e o body como JSON
# Confirme a sua senha
$ 
{
	"password": "String"
}

# Envie a requisição
# A API lhe retornará a confirmação de exclusão do usuário.
``` 
![image](https://user-images.githubusercontent.com/50267081/111529008-72e1f600-8740-11eb-8e95-1c9108bed67d.png)

##### Cadastro de Produtos

Para cadastrar um produto antes é necessário possuir o token de acesso.

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /produtos URL padrão
# Em sua ferramenta de teste de API adicione o header Authorization e no valor adicione o texto 'Bearer ' e seu token de acesso.
```
![image](https://user-images.githubusercontent.com/50267081/111529240-ac1a6600-8740-11eb-8566-616a7f9d6e5c.png)
``` bash
# Selecione o método POST e o body como JSON
# Adicione os campos abaixo e seus respectivos valores
$ 
{
	"name":"String",
	"description": "String",
	"price": float
	"images": ["String"]
}
*No campo images deve-se inserir as URLs das imagens que deseja cadastrar no produto."*
# Envie a requisição
# A API lhe retornará o id, nome, descrição, preço, array das URL das imagens, data da criação e o id do usuário que criou o produto.
``` 
![image](https://user-images.githubusercontent.com/50267081/111530049-9d807e80-8741-11eb-8a38-d7e32f00fbbc.png)

##### Listagem de Produtos

Para listar os produtos cadastrados antes é necessário possuir o token de acesso.

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /produtos URL padrão
# Em sua ferramenta de teste de API adicione o header Authorization e no valor adicione o texto 'Bearer ' e seu token de acesso.
```
![image](https://user-images.githubusercontent.com/50267081/111530225-ce60b380-8741-11eb-9f25-53e12ced6d2b.png)
``` bash
# Selecione o método GET
# Envie a requisição
# A API lhe retornará os ids, nomes, descriçções, preços, array das URL das imagens, o id do usuário que criou o produto,
o nome do usuário que criou o produto, data da criação, o id do ultimo usuário que alterou o produto, o nome deste usuário e a data da ultima alteração dos produtos.
``` 
![image](https://user-images.githubusercontent.com/50267081/111530926-a7ef4800-8742-11eb-92d6-4d47d2c1953c.png)

##### Listar um produto

Para listar o produto desejado antes é necessário possuir o token de acesso.

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /produtos/idDoProdutoQueDesejaListar URL padrão
# Em sua ferramenta de teste de API adicione o header Authorization e no valor adicione o texto 'Bearer ' e seu token de acesso.
```
![image](https://user-images.githubusercontent.com/50267081/111531190-f43a8800-8742-11eb-8230-044544e86a5b.png)
``` bash
# Selecione o método GET
# Envie a requisição
# A API lhe retornará o id, nome, descrição, preço, array das URL das imagens, o id do usuário que criou o produto,
o nome do usuário que criou o produto, data da criação, o id do ultimo usuário que alterou o produto, o nome deste usuário e a data da ultima lateração do produto.
``` 
![image](https://user-images.githubusercontent.com/50267081/111531473-585d4c00-8743-11eb-8fb6-2534065cbe9a.png)

##### Atualização de Produtos

Para alterar o produto desejado antes é necessário possuir o token de acesso.

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /produtos/idDoProdutoQueDesejaAlterar URL padrão
# Em sua ferramenta de teste de API adicione o header Authorization e no valor adicione o texto 'Bearer ' e seu token de acesso.
```
![image](https://user-images.githubusercontent.com/50267081/111531871-d7528480-8743-11eb-81fa-fcdbff90bba6.png)
``` bash
# Selecione o método PUT e o body como JSON
# Adicione os campos que deseja alterar entre as opções abaixo e seus respectivos valores
$ 
{
	"name":"String",
	"description": "String",
	"price": float
	"images": ["String"]
}
*No campo images deve-se inserir as URLs das imagens que deseja cadastrar no produto."*
# Envie a requisição
# A API lhe retornará o id, nome, descrição, preço, array das URL das imagens, data da alteração e o id do usuário que alterou o produto.
``` 
![image](https://user-images.githubusercontent.com/50267081/111531969-f51fe980-8743-11eb-8515-5290efe882ba.png)

##### Exclusão de Produtos

Para excluir o produto desejado antes é necessário possuir o token de acesso.

``` bash
# Em sua ferramenta de teste de API adicione o sufixo /produtos/idDoProdutoQueDesejadeletar URL padrão
# Em sua ferramenta de teste de API adicione o header Authorization e no valor adicione o texto 'Bearer ' e seu token de acesso.
```
![image](https://user-images.githubusercontent.com/50267081/111532295-4334ed00-8744-11eb-8755-12cef60b2129.png)
``` bash
# Envie a requisição
# A API lhe retornará a confirmação de exclusão do produto.
``` 
![image](https://user-images.githubusercontent.com/50267081/111532609-9c9d1c00-8744-11eb-82ee-62862936987e.png)

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
 
[![outlook Badge](https://img.shields.io/badge/-leonardo.s_afonso@hotmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leonardo.s_afonso@hotmail.com)](mailto:leonardo.s_afonso@hotmail.com)

---
