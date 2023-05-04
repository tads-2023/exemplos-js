const mongoose = require('mongoose')
const pizzaSchema = new mongoose.Schema({
    nome: "String",
    preco: "Number",
    ingredientes: ["String"]
});

 const pizza = mongoose.model('Pizzas', pizzaSchema)

 module.exports = pizza;