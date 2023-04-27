const express = require("express");
const Desafio = require("../models/Desafio");

const desafiosRouter = express.Router();

desafiosRouter.post("/", async (req, res) => {
    const {
        titulo,
        descricao
    } = req.body;

    const desafio = await Desafio.create({
        titulo: titulo,
        descricao: descricao,
        dataCriacao: new Date()
    });

    res.send(desafio);
});

desafiosRouter.delete("/:id", async (req, res) => {
    const desafio = await Desafio.findOne({_id: req.params.id});
    await desafio.deleteOne();
    res.send(desafio);
});

desafiosRouter.get("/", async (req, res) => {
    const page = req.query.page || 1;
    const search = req.query.search;
    if(search) {
        const desafios = await Desafio.find({
            $or: [
                { titulo: { $regex: '.*' + search + '.*' } },
                { descricao: { $regex: '.*' + search + '.*' } },
            ]
        })
        res.send(desafios);
    } else {
        const desafios = await Desafio.find({}).skip((page-1)*2).limit(2);
        res.send(desafios);
    }
});

desafiosRouter.put("/:id", async (req, res) => {
    const desafio = await Desafio.findOne({_id: req.params.id});
    const {
        titulo,
        descricao
    } = req.body;
    if(titulo) { desafio.titulo = titulo; }
    if(descricao) { desafio.descricao = descricao; }

    await desafio.save();
    res.send(desafio);
})

module.exports = desafiosRouter;