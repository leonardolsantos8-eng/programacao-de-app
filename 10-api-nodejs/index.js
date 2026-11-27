// importações
const express = require('express')
const cors = require('cors')
const {Sequelize, DataTypes } = require('sequelize')

// Configuração do banco de dados.
const sequelize = new Sequelize('db_projeto', 'root','',{
    hots: 'localhost',
    dialect: 'mysql'
} )

//caracteristica da tabela no banco de dados
const Cliente = sequelize.define('Cliente', {
    nome: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    telefone: {type: DataTypes.STRING, allowNull: false},
})

//configuraçoes da API.

const api = express()
api.use(cors())
api.use(express.json())

const port = 3001

// cadastrar um novo cliente.
api.post('/clientes', async (req, res) => {
    try{
        const {nome, email, telefone} = req.body
        const novoCliente = await Cliente.create({nome, email, telefone })
        res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso!', cliente: novoCliente })
    } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar cliente', erro })
}
})

//buscar todos os cliente no banco de dados.

api.get('/clientes', async (req, res) => {
    try{
        const todosOsClientes = await Cliente.findAll()
        res.json(todosOsClientes)
    } catch (erro){
        res.status(500).json({mensagem: 'erro buscar cliente!'})
    }
    
})

//iniciando o servidor e conectando ao banco de dados.
sequelize.sync().then(() => {
    api.listen(port, () =>{
        console.log(`Servidor rodando em http://localhost:${port}`)
        console.log('Banco de dados conectado.')
    })

}).catch(erro => {
    console.log('Erro ao conectar ao banco de dados.',erro)
    console.log('Encontre o erro aque: ', erro)
})



