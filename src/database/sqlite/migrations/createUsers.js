const createUsers = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR, 
    avatar VARCHAR NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

module.exports = createUsers;

/*
  Define uma string contendo uma instrução SQL para criar uma tabela chamada "users".
  A tabela terá as seguintes colunas:
*/

/*
CREATE TABLE users (
    // Coluna 'id': Chave primária, autoincrementada
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    // Coluna 'name': Armazena o nome do usuário (tipo VARCHAR)
    name VARCHAR,

    // Coluna 'email': Armazena o e-mail do usuário (tipo VARCHAR)
    email VARCHAR,

    // Coluna 'password': Armazena a senha do usuário (tipo VARCHAR)
    password VARCHAR, 

    // Coluna 'avatar': Armazena o caminho para a imagem do avatar do usuário (tipo VARCHAR), permitido ser nulo
    avatar VARCHAR NULL,

    // Coluna 'created_at': Armazena a data e hora de criação do registro (tipo TIMESTAMP), valor padrão é o momento atual
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    // Coluna 'updated_at': Armazena a data e hora da última atualização do registro (tipo TIMESTAMP), valor padrão é o momento atual
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

*/