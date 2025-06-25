const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port  = 5000;
const listing = require("./models/listing");
const initData = require("./init/init.js");
const path = require("path");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




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


app.get("/listings", async(req, res) => {
    const allListings = await listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// app.get("/testListings", async(req, res) => {
//     let sampleListing = new listing ({
//         title: "Sample Title",
//         author: "Sample Author",
//         description: "Sample Description",
//         image: "Sample Image",
//         rating: 123,
//     });

//     await sampleListing.save();
//     console.log("sample listing saved");
//     res.send("data added succefully");
// })

app.get("/", (req,res) => {
    res.send("root route");
})

// const initDb = async() => {
//     await listing.deleteMany({});
//     await listing.insertMany(initData.data);
//     console.log("Database initialized");
// }


// initDb();

app.listen(port, () => {
    console.log(`Server is Runnning in the port ${port}`);
});