// TODO (step0) import mongoose
const mongoose = require("mongoose");

// TODO (step0) define your Comment schema
const CommentSchema = new mongoose.Schema({
    creator_name: String,
    creator_id: String,
    parent: String,
    content: String,
}, {"collection": "comments"});

// TODO (step0) create and export the model for the Comment schema 
module.exports = mongoose.model("comment", CommentSchema);
