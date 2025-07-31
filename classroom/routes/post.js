const express = require("express");
const router = express.Router();

//index posts
router.get("/", (req, res) => {
  res.send("Hello posts!");
});

//show posts
router.get("/:id", (req, res) => {
  res.send("get for posts");
});

//post posts
router.post("/", (req, res) => {
  res.send("post for posts");
});

//delete posts
router.get("/:id", (req, res) => {
  res.send("delete for posts");
});

//new posts
router.get("/new", (req, res) => {
  res.send("form is being rendered");
});

module.exports = router;
