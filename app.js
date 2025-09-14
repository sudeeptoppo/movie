if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoStore = require("connect-mongo");
const flash = require("connect-flash");

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const dbUrl = process.env.ATLASDB_URL;

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const store = mongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
    secret: "thisisasecret",
  },
});

store.on("error", function (e) {
  console.log("session store error", e);
});

const sessionOptions = {
  secret: "thisisasecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser("secretcode"));
app.use(session(sessionOptions));
app.use(flash());
// Passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect(dbUrl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.reviewSuccess = req.flash("reviewSuccess");
  res.locals.currUser = req.user;
  next();
});

//demo user
// app.get("/demoUser", async (req, res) => {
//   let fakeUser = new User({
//     email: "student1@gmail.com",
//     username: "student1",
//   });
//   let registeredUser = await User.register(fakeUser, "password");
//   res.send(registeredUser);
// });

app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.get("/getcookies", (req, res) => {
  console.log(req.cookies);
  res.cookie("name", "tobi", { signed: true });
  res.send("cookie");
});

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  // console.log(req.cookies);
  res.send("vfy");
});

// root route
app.get("/", (req, res) => {
  console.log(req.cookies);
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

// app.listen(port, () => {
//   console.log(`Server is Running on port ${port}`);
// });

// app.listen(port, () => {
//   console.log(`Server is Running on port ${port}`);
// });
app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
