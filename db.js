// Importa o moongose para interagir com MongoDB (Banco de dados)
const mongoose = require("mongoose");

// Carrega as variaveis de ambiente do arquivo .ENV
require("dotenv").config();

// Configurando para permitir consultas (Restritas)
mongoose.set("strictQuery", true)

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const url = `mongodb+srv://${dbUser}:${dbPassword}@projeto-api.veajh.mongodb.net/?retryWrites=true&w=majority&appName=PROJETO-API`

// Função para no MongoDB
async function main() {
    await mongoose.connect(url)
    // ();
    console.log("Conectou ao banco de dados!");
}
// Exibir a msg. ao usuario com erro
main().catch((err) => console.log(err));

// Exporta a função para utilizar em outro arquivo
module.exports = main;
