// Importa a função sqliteConnection do módulo local '../../sqlite'
const sqliteConnection = require('../../sqlite');

// Importa a string createUsers do módulo local './createUsers'
const createUsers = require('./createUsers');

// Declaração de uma função assíncrona chamada migrationsRun
async function migrationsRun() {
    // Cria um array chamado 'schemas' contendo as instruções SQL definidas nos módulos importados
    const schemas = [
        createUsers
    ].join('');

    // Chama a função sqliteConnection para obter uma conexão com o banco de dados SQLite
    sqliteConnection()
    .then(db => db.exec(schemas)) // Executa as instruções SQL no banco de dados
    .catch(error => console.error(error)); // Manipula erros, se ocorrerem
}

// Exporta a função migrationsRun para que ela possa ser utilizada em outros arquivos
module.exports = migrationsRun;
