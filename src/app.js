import express from "express";
import conectaDataBase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const conexao = await conectaDataBase();

//Caso a conexão com o DB seja falha, será exibido o erro
conexao.on("error", (err)=>{
  console.error("Erro de conexão", err)
})

//Evento de sucesso de conexão com o DB
conexao.once("open", ()=>{
  console.log("Conexão feita com sucesso");
})

const app = express();
routes(app)

app.delete("/livros/:id", (req, res)=>{
        const index = buscaLivro(req.params.id);
        livros.splice(index, 1);
        res.status(200).send("Livro deletado com sucesso.")
})

export default app;
