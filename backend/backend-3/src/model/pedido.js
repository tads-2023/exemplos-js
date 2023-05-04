const mongoose = require("mongoose");
const {itemEsquema} = require("./item")

const pedidoschema = new mongoose.Schema({
    itens: [itemEsquema],

})

const pedido = mongoose.model("Pedidos", pedidoschema);
module.exports = pedido;