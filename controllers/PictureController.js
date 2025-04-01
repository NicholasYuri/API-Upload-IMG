// Chamando o modelo(Picture) do arquivo models
const Picture = require("../models/Picture")

// importa o módulo fs para interagir com o sistema de arquivos
const fs = require("fs")

// Função para criar uma nova imagem no banco de dados 
exports.create = async (req, res) => {
  // res.json("OK") 

  try{
    // Obtem o nome da imagem do corpo da requisição
    const { name } = req.body;

    //  Obtem o arquivo da req. (Usado pelo Multer para fazer o Upload)
    const file = req.file;

    // Cria uma nova instancia com nome e caminho do arquivo
    const picture = new Picture({
      name,
      scr: file.path,
    });

    // Salva a imagem no MongoDB
    await picture.save();

    // Retornara a resposta com imagem. e uma msg. de sucesso
    res.json({ picture, msg: "Imagem salva com sucesso!"});
  } catch (error) {
    // Em caso de erro, Retorna uma msg. com erro 500
    res.status(500).json({ message: "Erro ao salvar imagem!" });
  }
};

// Função para encontrar todas as imagem no banco de dados 
exports.findAll = async (req, res) => {
  try {
    // Busca todas as imagens no banco de dados
    const pictures = await Picture.find();
        
    // Retorna todas as imagens do MongoBD
    res.json(pictures);
  } catch (err) {
    // EM caso de erro, retorna uma resposta de erro com codigo 500
    res.status(500).json({ message: "erro ao buscar imagens!" });
    // o erro (500) é erro generico podendo ser erro do cliente e do servidor
  }
};


// Função para remover uma imagem do MongoDB (banco de dados) e local(Aquivo Uploads do VsCode)
exports.remove = async (req, res) => {
  try {
    // Busca a imagem no MongoDB(Banco de dados), com a ID enviado
    const picture = await Picture.findById(req.params.id);

    // Se a img. não for encontrado no MongoDB(Banco de dados)
    if (!picture) {
      return res.status(404).json({ message: "imagem não encontrada!" });
    }

    // Remove o arquivo localmente (Arquivo Uploads)
    fs.unlinkSync(picture.scr);

    // Remove a imagem do MongoDB(Banco de dados)
    await Picture.deleteOne({ _id: req.params.id });

    // await picture.remove();

    // Retorna uma menssagem ao usuario 
    res.json({ message: "Imagem removida!" });
  } catch (error) {
    console.error(error);
    // Retorna erro se houver alguem problema
    res.status(500).json({ message: "Erro ao excluir imagem!" });
  }
};