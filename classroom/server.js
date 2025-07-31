const express = require("express");
const app = express();
const post = require("./routes/post.js");
const user = require("./routes/user.js");

app.get("/", (req, res) => {
  res.send("Hello root!");
});

app.use("/posts", post);
app.use("/users", user);

app.listen(3000, () => {
  console.log("server is listening to port 3000");
});
