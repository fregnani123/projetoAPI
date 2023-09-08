import express from 'express';
const app = express()
import dotEnv from 'dotenv';
dotEnv.config({ path: './.env' });
import mongoose from 'mongoose';
import User from './models/NewUser.js';
import cors from 'cors'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT
const PASSWORD = process.env.PASSWORD
app.use(cors())

const users = []

app.get('/users', (req, res) => {
    return res.json(users)
})

app.get('/find', async (req, res) => {
    const users = await User.find()
    return res.json(users)
})

app.post('/users', async (req, res) => {
    const user = req.body
    const newUser = await User.create(user)
    return res.json(newUser)

})

// app.post('/post', (req, res) => {
//     const { nome, age, nickName } = req.body
//     users.push[{ nome, age, nickName }]
//     return res.json({ nome, age, nickName })
// })

mongoose.connect(PASSWORD).then(() => {
    console.log('Banco de dados conectado')
}).catch(() => {
    console.log('Erro não conectou')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na PORT:${PORT}`)
})