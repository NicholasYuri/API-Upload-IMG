// importa o módulo experess para configurar as rotas
const express = require("express");

// Cria a instancia do roteador do express para definir ROTAS 
const router = express.Router();

// Importa a configuração do Multer para ligar com uploads de arquivos 
const upload = require("../config/multer")

// Importa o controlador da img. onde tem todas as funções e busca
const PictureController = require("../controllers/PictureController");

// Definindo a rota POST para criar, e fazer upload da imagem
router.post("/", upload.single("file"), PictureController.create);  // o (/) ja é um localhost/(Porta)

// Definindo rota GET para buscar todas as imagens do DB
router.get("/", PictureController.findAll);

// Definindo a rota GET para obter uma imagem especifa
router.get("/:id/image", PictureController.getImage)
// Definindo a rota de DELETE para apagar imagem
router.delete("/:id", PictureController.remove);

// Exportando o arquivo para utilizar no app.js
module.exports = router;
