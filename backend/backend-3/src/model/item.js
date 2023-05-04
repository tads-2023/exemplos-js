const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    qtd : "Number",
    pizzaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pizzas"
    }
})

const item = mongoose.model("Itens", itemSchema);
module.exports.itemModelo = item;
module.exports.itemEsquema = itemSchema;