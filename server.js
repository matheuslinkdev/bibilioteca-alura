//Configurando dotenv no arquivo mais externo, para funcionar globalmente
import "dotenv/config";
import app from "./src/app.js";


//Criando servidor de forma "pura"
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   // Os colchetes indicam uma variavel passada dentro do objeto rotas, acessando a url referente, como se fosse acessar certo elemento de um array de livros, ex: livros[1]
//   res.end(rotas[req.url]);
// });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening in port: ${PORT}`);
});
