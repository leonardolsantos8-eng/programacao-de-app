// Importações
const express = require('express')
const cors = require('cors')
const { Sequelize, DataTypes } = require('sequelize')

// Configuração do banco de dados
const sequelize = new Sequelize('db_projeto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// Característica da tabela no banco de dados
const Cliente = sequelize.define('Cliente', {
    nome: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    telefone: { type: DataTypes.STRING, allowNull: false }
})

// Configurações da API
const api = express()
api.use(cors())
api.use(express.json())

const port = 3001

// Cadastrar um novo cliente
api.post('/clientes', async (req, res) => {
    try {
        //virao do bruno
        const { nome, email, telefone } = req.body
        
        // salvando na tabela do banco de dados
        const novoCliente = await Cliente.create({ nome, email, telefone })
        
        // resposta da api
        res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!', cliente: novoCliente })
    } catch (erro) {
        res.status(400).json({ mensagem: 'Erro ao cadastrar cliente', detalhe: erro.message })
    }
})

// Buscar todos os clientes no banco de dados
api.get('/clientes', async (req, res) => {
    try {
        const todosOsClientes = await Cliente.findAll()
        res.json(todosOsClientes)
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao buscar clientes!', detalhe: erro.message })
    }
})

// Iniciando o servidor e conectando ao banco de dados
sequelize.sync().then(() => {
    api.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log('Banco de dados conectado.')
    })
}).catch(erro => {
    console.log('Erro ao conectar ao banco de dados:', erro)
})