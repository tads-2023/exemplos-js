const express = require("express");
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Article = require("./models/Article");

setup = async () => {
    const mongod = await MongoMemoryServer.create();

    mongoose.connect(`${mongod.getUri()}SpaceFlights`).
        then(() => {
        const app = express();
        app.use(express.json());

        app.get("/", (req, res) => {
            res.send("Back-end Challenge - Space Flight News");
        })

        app.get("/articles", async(req, res) => {
            let page = req.query.page || 1;
            const articles = await Article.find({}).skip(page*4-4).limit(4);
            res.send(articles);
        });

        app.get("/articles/:id", async(req, res) => {
            const article = await Article.findOne({_id: req.params.id});
            res.send(article)
        });

        app.post("/articles", async (req, res) => {
            const { 
                featured, 
                title, 
                url, 
                imageUrl, 
                newsSite, 
                summary, 
                publishedAt
            } = req.body;
            const article = await Article.create({featured, title, url, imageUrl, newsSite, summary, publishedAt}) 
            res.send(article);
        })

        app.listen(3000, () => {
            console.log("Servidor ouvndo na porta 3000");
        })    
    });
};
setup();
