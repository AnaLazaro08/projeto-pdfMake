const express = require('express');
const bodyParser = require('body-parser');
const userController= require('./controllers/relatorioController');
const app = express(); //Cria uma instancia do aplicativo express

//configura o EJS como mecanismo de vizualização
app.set('view engine', 'ejs');

//Middleware para parsing do body
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', userController.getAllUsers);
app.get('/relatorio/pdf', userController.generatePDF);

//iniciar o servidor
app.listen(200, () => { //inicia o servidor na porta 2000
    console.log('Servidor rodando na porta 2000');    
});