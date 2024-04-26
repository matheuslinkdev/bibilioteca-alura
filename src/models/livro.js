import mongoose from "mongoose";
import { AutorSchema } from "./Autor.js";

// SCHEMA é um objeto de configuração que define a estrutura e as propriedades de um documento

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: {type: Number},
  autor: AutorSchema
}, { versionKey: false});

const livro = mongoose.model("livros", livroSchema)

export default livro
