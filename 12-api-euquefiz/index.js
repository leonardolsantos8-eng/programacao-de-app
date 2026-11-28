// Importações
const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

// /livros titulo, autor , numero de paginas, preco

const sequelize = new Sequelize('meubanco', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

const Livro = sequelize.define('Livro',{
    titulo: { type: DataTypes.STRING, allowNull: false, unique: true},
    autor: { type: DataTypes.STRING, allowNull: false},
    numero_paginas: {type: DataTypes.INTEGER, allowNull: false },
    preco: {type: DataTypes.DECIMAL, allowNull: false }
})

const api = express()
api.use(cors())
api.use(express.json())

const port = 3002

api.post('/livros', async (req, res) =>{
    try{
        const { titulo, autor, numero, preco} = req.body
        const novoLivro = await Livro.create({ titulo, autor, numero, preco} )
        res.status(201).json({mensagem: 'Livro cadastrado com sucesso!', livro: novoLivro})
    } catch (erro) {
       res.status(400).json({ mensagem: 'Erro ao cadastrar livro', detalhe: erro.message }) 
    }
})

api.get('/livros', async (req,res) => {
    try {
        const todosOsLivros = await Livro.findAll()
        res.json(todosOsLivros)
    } catch (erro){
        res.status(500).json({ mensagem: 'Erro ao buscar livros!', detalhe: erro.message })
    }
})

sequelize.sync().then(() => {
    api.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log('Banco de dados conectado.')
    })
}).catch(erro => {
    console.log('Erro ao conectar ao banco de dados:', erro)
})