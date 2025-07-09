const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port  = 5000;
const listing = require("./models/listing");
const initData = require("./init/init.js");
const path = require("path");
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");


 app.engine("ejs", ejsMate);


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));




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

//index route
app.get("/listings", async(req, res) => {
    const allListings = await listing.find({});
    res.render("listings/index.ejs", {allListings});
});


//new
app.get("/listings/new", (req, res) =>{
    res.render("listings/new.ejs");
})

app.post("/listings", async(req, res) => {
    const newListing = new listing(req.body.listing); 
    console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
})


//show route
app.get("/listings/:id", async(req, res) => {
    let {id} = req.params;
    const foundListing = await listing.findById(id);
    res.render("listings/show.ejs", {listing: foundListing});
})

// edit
app.get("/listings/:id/edit", async(req, res) =>{
    let {id} = req.params;
    const foundListing = await listing.findById(id);
    console.log(foundListing);
    res.render("listings/edit.ejs", {listing: foundListing});
})

//edit
app.put("/listings/:id", async(req, res) =>{
    let {id} = req.params;
    let updated = await listing.findByIdAndUpdate(id, {...req.body.listing});
    console.log(updated);
    res.redirect(`/listings/${id}`);
})

//delete route
app.delete("/listings/:id", async(req, res) =>{
    let{id} = req.params;
    let deletedListing = await listing.findByIdAndDelete(id); 
    console.log(deletedListing);
    res.redirect("/listings");
})



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

// app.get("*", (req, res) => {
//     res.status(404).send('Route not found');
// });




app.listen(port, () => {
    console.log(`Server is Runnning in the port ${port}`);
});