import { autor } from "../models/Autor.js";

class LivroController {
  static async listarAutores(req, res) {
    try {
      const listaDeAutores = await autor.find({});
      //Por agora se tratar de uma devolução de dados em objetos, não se pode usar o res.send, tem que se transformar os dados em json no envio da resposta
      res.status(200).json(listaDeAutores);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - Falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha na requisição do Autor` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha ao cadastrar Autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor Atualizado"});
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Falha na atualização do Autor` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor excluído"});
    } catch (err) {
      res
        .status(500)
        .json({ message: `${err.message} - Não foi possível excluir o Autor` });
    }
  }
}

export default LivroController;
