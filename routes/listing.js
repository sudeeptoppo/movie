const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const listing = require("../models/listing");
const { isLoggedIn } = require("../middleware.js");

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((detail) => detail.message).join(",");
    throw new ExpressError(400, msg);
  } else {
    next();
  }
};

//index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//new
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

//create
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "send valid data for listing");
    }
    const newListing = new listing(req.body.listing);
    console.log(newListing);
    await newListing.save();
    req.flash("success", "new book added");
    res.redirect("/listings");
  })
);

//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const foundListing = await listing.findById(id).populate("reviews");
    if (!foundListing) {
      req.flash("error", "listing not found");
      res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing: foundListing });
  })
);

// edit
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const foundListing = await listing.findById(id);
    console.log(foundListing);
    res.render("listings/edit.ejs", { listing: foundListing });
  })
);

//update
router.put(
  "/:id",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "send valid data for listing");
    }
    let { id } = req.params;
    let updated = await listing.findByIdAndUpdate(id, { ...req.body.listing });
    console.log(updated);
    req.flash("success", "listing updated");
    res.redirect(`/listings/${id}`);
  })
);

//delete route
router.delete(
  "/:id",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "listing deleted");
    res.redirect("/listings");
  })
);

module.exports = router;
