// Importa a biblioteca "express-async-errors" para facilitar o tratamento de erros assíncronos.
require("express-async-errors");

//Importar o banco de dados
const migrationsRun = require("./database/sqlite/migrations")

// Importa a classe "AppError" definida no arquivo "AppError.js".
const AppError = require("./utils/AppError");

// Importa o framework Express, que é utilizado para facilitar a criação de servidores web em Node.js.
const express = require("express");

// Importa as rotas definidas no arquivo "routes.js".
const routes = require("./routes");

// Cria uma instância do aplicativo Express.
const app = express();

// Middleware para interpretar o corpo das requisições como JSON.
app.use(express.json());

// Aplica as rotas importadas ao aplicativo.
app.use(routes);

//Iniciando o banco de dados
migrationsRun();

// Middleware para tratamento de erros global.
app.use((error, request, response, next) => {
  // Verifica se o erro é uma instância da classe "AppError".
  if (error instanceof AppError) {
    // Retorna uma resposta com o status e a mensagem do erro.
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  // Caso não seja uma instância de "AppError", trata como um erro interno do servidor (status 500).
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

// Define a porta em que o servidor vai escutar as requisições. Neste caso, a porta é 3333.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando o servidor estiver rodando.
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
