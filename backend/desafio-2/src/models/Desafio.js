const mongoose = require("mongoose");

const desafioSchema = new mongoose.Schema({
    titulo: "String",
    descricao: "String",
    dataCriacao: "Date"
});

const Desafio = mongoose.model("Desafio", desafioSchema);

module.exports = Desafio;