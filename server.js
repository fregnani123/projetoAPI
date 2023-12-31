const express = require('express');
const app = express();
require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');
const cors =  require('cors');
const router = require('./router/routes.js');

const PORT = process.env.PORT;
const PASSWORD = process.env.PASSWORD;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

mongoose.connect(PASSWORD).then(() => {
    console.log('Banco de dados conectado')
}).catch(() => {
    console.log('Erro não conectou')
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na PORT:${PORT}`)
});