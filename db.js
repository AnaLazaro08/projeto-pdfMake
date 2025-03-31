const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'crud_mvc'
});

conexao.connect((erro) => {
    if (erro){
        console.error('erro ao conectar ao banco de dados:')
    }
    console.log('conexão com o banco de dados estabelecida!')
});

module.exports = conexao;