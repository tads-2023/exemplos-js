const express = require('express')

const { MongoMemoryServer } = require("mongodb-memory-server")
const mongoose = require('mongoose')
const pizza = require('./model/pizza')
const pedido = require('./model/pedido');

const {itemModelo} = require('./model/item');


MongoMemoryServer.create().then((mongod) => {
    mongoose.connect(`${mongod.getUri()}pizzaria`).then(() => {
        const app = express();
        app.use(express.json())
        app.get('/', (req, res) => {
            res.send("bacate")
        });
        app.post('/pizza', async (req, res) =>  {
             const{nome,preco,ingredientes} = req.body;

           const NovaPizza = await pizza.create({nome,preco,ingredientes})
            res.send(NovaPizza)
        });
        app.get("/pizza", async (req, res) => {
            const pizzas = await pizza.find({});
            res.send(pizzas);
        });

        app.post("/pedido", async (req, res) => {
            const {itens} = req.body;
            const novoPedido = await pedido.create({itens: itens});
            res.send(novoPedido);
        })


        app.get("/itens", async (req, res) => {
            const itens = await itemModelo.find({});
            res.send(itens);
        });

        app.listen(3000, () => {
            console.log("Servidor rodando")
        })
    })

})