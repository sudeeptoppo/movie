const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderMovies");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

// root route
app.get("/", (req, res) => {
  res.send("root route");
});

app.all("*", (req, res, next) => {
  res.status(404);
  if (req.accepts("html")) {
    res.render("error.ejs", {
      err: { statusCode: 404, message: "Page not found" },
    });
    return;
  }
  if (req.accepts("json")) {
    res.json({ error: "Page not found" });
    return;
  }
  res.type("txt").send("Page not found");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error stack:", err.stack);
  let { statusCode = 500, message = "something went wrong" } = err;
  if (res.headersSent) {
    return next(err);
  }
  res.status(statusCode).render("error.ejs", { err });
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
