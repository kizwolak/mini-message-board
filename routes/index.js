var express = require("express");
var router = express.Router();
const { MongoClient } = require("mongodb");
const uri = process.env.SECRET_MONGODB_LINK;
const client = new MongoClient(uri);
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

/* GET home page. */
router.get("/", function (req, res, next) {
  const messages = req.messages;
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", async function (req, res, next) {
  const database = client.db("messages");
  const messages = database.collection("messages");
  await messages.insertOne({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
