const mongoose = require("mongoose");
const initData = require("./init.js");
const listing = require("../models/listing.js");


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


const initDb = async() => {
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("Database initialized");
}

initDb();

