var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const messages = req.messages;
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
  const messages = req.messages;
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
