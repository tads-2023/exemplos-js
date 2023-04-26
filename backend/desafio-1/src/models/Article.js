const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    featured: Boolean, 
    title: String, 
    url: String, 
    imageUrl: String, 
    newsSite: String, 
    summary: String, 
    publishedAt: Date
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
