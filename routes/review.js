const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const listing = require("../models/listing");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//review post route
router.post(
  "/",
  validateReview,
  wrapAsync(async (req, res) => {
    let foundListing = await listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    foundListing.reviews.push(newReview);
    await newReview.save();
    await foundListing.save();
    console.log("review saves");
    res.redirect(`/listings/${foundListing._id}`);
  })
);

//delete review route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    console.log("review deleted");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
