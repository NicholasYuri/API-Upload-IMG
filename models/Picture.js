const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define um Schema para as imagens
const PictureSchema = new Schema({
    name: { type: String, required: true },  // requer nome no tipo caracter 
    scr: { type: String, required: true },   // requer scr no tipo caracter 
});

// Exportando para utilizar em outros arquivos
module.exports = mongoose.model("Picture", PictureSchema);