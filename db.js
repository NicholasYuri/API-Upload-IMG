const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect
    `mongodb+srv://@projeto-api.veajh.mongodb.net/?retryWrites=true&w=majority&appName=PROJETO-API`
    ();
    console.log("Conectou ao banco de dados!");
}

main().catch((err) => console.log(err));

module.exports = main;
