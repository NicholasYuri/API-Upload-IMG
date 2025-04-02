// Importa o moogose para interagir com o MongoDB (Banco de dados)
const mongoose = require("mongoose");

// Permitir Criar esquemas e modelos para o mongoDB 
const Schema = mongoose.Schema;

// Define um Schema para as imagens
const PictureSchema = new Schema({
    name: { type: String, required: true },  // requer nome no tipo caracter (Msg. de texto) e obrigatória
    // scr: { type: String, required: true },   // requer scr no tipo caracter (Msg. de texto) e obrigatória
    imagem: { type: Buffer, required: true}, // Armazena em buffer ate amarzenar no banco de dados
    contentType: { type: String, required: true},
});

// Criando o modelo 'Picture' a partir do esquema criado antes
// O modelo 'Picture' é usado para interagir com a "Tabela" Picture no Mongo DB
module.exports = mongoose.model("Picture", PictureSchema);