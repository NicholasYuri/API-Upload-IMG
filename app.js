// Importando Express
const express = require("express");

// Cria uma instancia do Express
const app = express();

// carrega as variaveis de ambiente do .ENV
require("dotenv").config()

// Estabelece a conexao com MongoDB (Banco de dados)
require("./db")

// Define a porta do servidor, ou do .ENV ou 3000 por padrão
const port = process.env.PORT || 3000

// Importa o roteador de imagens para gerenciar as rotas criadas 
const pictureRouter = require("./routes/picture");

// configuração de coors
app.use((req, res, next) => {
    // Permitindo qualquer origem req. para o servidor
    res.header("Access-Control-Allow-Origin", "*");
    // Permitindo acessar os metodos GET, POST, DELETE
    res.header("Access-CControl-Methods", "GET, POST, DELETE");
    // Permitindo que o cabeçalho Content-Type seja enviado no formato um corpo um cabeçalho uma imagem
    res.header("Access-Control-Allow-Header", "Content-Type");
    // Chama a rota de processamento
    next();
})

// Define que todas as rotas são "localhost:3000/pictures"
app.use("/pictures", pictureRouter);

// Inicia o servidor, e exibe uma menssagem ao usuario
app.listen(port, () => {
    console.log(`O servidor executa na porta ${port}`);
});