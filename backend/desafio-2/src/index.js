const express = require("express");
const mongoose = require("mongoose");
const DesafioController = require("./controllers/DesafioController");
const { MongoMemoryServer } = require("mongodb-memory-server");

const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    mongoose.connect(`${mongod.getUri()}desafios`).then( ()=> {
        const app = express();

        app.use(express.json());

        app.use("/desafios", DesafioController);

        app.get("/", (req, res) =>{
            res.send("Servidor está funfando!");
        });

        

        app.listen(3000, () => {
            console.log("Listening in http://localhost:3000");
        });
    })
}

setup();