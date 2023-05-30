/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

const MY_NAME = "Anonymous User";

// import models so we can interact with the database
const Story = require("./models/story.js");
// TODO (step1) import the comment model
const Comment = require("./models/comment.js");
const User = require("./models/user");
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();


router.get("/stories", (req, res) => {
  // TODO (step1) get all the stories from the database and send response back to client 
  Story.find({})
    .then((stories) => res.send(stories));
});

router.post("/story", (req, res) => {
  // TODO (step1) create a new Story document and put it into the collection using the model
    const newStory = new Story({
      creator_name: MY_NAME,
      content: req.body.content,
    })
    newStory.save().then((story) => res.send(story));
});

router.get("/comment", (req, res) => {
  Comment.find({ parent: req.query.parent }).then((comments) => {
    res.send(comments);
  });
});

router.post("/comment", (req, res) => {
  // TODO (step2) create a new Comment document and put it into the collection using the model
  const newComment = new Comment({
    creator_name: MY_NAME,
    parent: req.body.parent,
    content: req.body.content,
  })

  newComment.save().then((comment) => res.send(comment));
});

router.post("/login", auth.login);
router.post("/logout", auth.logout);

router.get("/whoami", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    // user is not logged in
    res.send({});
  }
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});


module.exports = router;
