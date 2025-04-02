const multer = require("multer") // Importando o multer, upload de arquivos

// Configuração do multer para salvar em memoria 
const storage = multer.memoryStorage();

// const path = require("path") // importando o path para manipular as pastas (Caminhos)


// Multer onde os arquivos serão salvos
// const storage = multer.diskStorage({
    // Função que define o destino do arquivo
    // destination: function (req, file, cb) {
        // O destino e a pasta upload
        // cb(null, "uploads/"); // null significa que não há erro
    // },
    // Função que define o nome do arquivo para salvar
    // filename: function (req, file, cb) {
        // Data + Extensão do arquivo
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });

// Middleware do multer
const upload = multer({ 
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
});

// Exporta para utilizar em outro arquivo
module.exports = upload;