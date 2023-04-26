const mongoose = require("mongoose");

const launchesAndEventsSchema = new mongoose.Schema({
    provider: String
});


const articleSchema = new mongoose.Schema({
    featured: Boolean, 
    title: String, 
    url: String, 
    imageUrl: String, 
    newsSite: String, 
    summary: String, 
    publishedAt: Date,
    launches: [launchesAndEventsSchema],
    events: [launchesAndEventsSchema]
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
