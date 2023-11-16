// Importa o módulo Router do Express.
const { Router } = require("express");

// Importa as rotas relacionadas aos usuários do arquivo user.routes.js.
const userRoutes = require("./user.routes");

// Cria uma instância do Router para definir as rotas principais.
const routes = Router();

// Usa as rotas relacionadas aos usuários no caminho "/users".
routes.use("/users", userRoutes);

// Exporta as rotas principais para serem utilizadas em outros lugares do aplicativo.
module.exports = routes;
