const express = require("express");
const router = express.Router();

//index users
router.get("/", (req, res) => {
  res.send("Hello users!");
});

//show users
router.get("/:id", (req, res) => {
  res.send("get for user");
});

//post users
router.get("/", (req, res) => {
  res.send("post for user");
});

//delete users
router.get("/:id", (req, res) => {
  res.send("delete for users");
});

//new
router.get("/new", (req, res) => {
  res.send("form is being rendered");
});

module.exports = router;
