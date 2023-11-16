// Importando as bibliotecas necessárias para trabalhar com o SQLite no Node.js
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");

// Função assíncrona para estabelecer uma conexão com o banco de dados SQLite
async function sqliteConnection() {
    // Criando uma conexão com o banco de dados usando o SQLite
    const database = await sqlite.open({
        // Especificando o caminho do arquivo do banco de dados (usando o diretório atual e subindo um nível)
        filename: path.resolve(__dirname, "..", "database.db"),
        // Especificando o driver do banco de dados como sqlite3
        driver: sqlite3.Database
    });

    // Retornando a conexão estabelecida com o banco de dados
    return database;
}

// Exportando a função para que ela possa ser utilizada em outros arquivos
module.exports = sqliteConnection;
