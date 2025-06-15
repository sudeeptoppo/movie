const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port  = 5000;


main()
.then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderMovies');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
    console.log(`Server is Runnning in the port ${port}`);
});