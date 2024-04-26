/* Mongoose é uma biblioteca que faz a conexão do local com o banco */
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

async function conectaDataBase() {
  mongoose.connect(CONNECTION_STRING);

  return mongoose.connection;
}

export default conectaDataBase;
