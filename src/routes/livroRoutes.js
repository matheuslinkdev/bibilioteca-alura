import  express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router()

//No express colocamos as rotas ordenadas de maior complexidade para menor, por peculiaridade do express

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
routes.get("/livros/:id", LivroController.listarLivroPorId);
routes.post("/livros", LivroController.cadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes


