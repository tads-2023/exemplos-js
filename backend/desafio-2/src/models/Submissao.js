const mongoose = require("mongoose");

const submissaoSchema = new mongoose.Schema({
    linkRepositorio: String,
    dataCriacao: Date,
    status: String,
    nota: Number,
    desafioId: { 
        type: Schema.Types.UUID, 
        ref: 'Desafio' 
    }
});

const Submissao = mongoose.model("Submissao", submissaoSchema);