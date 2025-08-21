const listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
  let foundListing = await listing.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id; // Set the author field
  foundListing.reviews.push(newReview);
  await newReview.save();
  await foundListing.save();
  console.log("review saved");
  req.flash("reviewSuccess", "Review added");
  res.redirect(`/listings/${foundListing._id}`);
};

module.exports.destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  console.log("review deleted");
  req.flash("reviewSuccess", "Review deleted");
  res.redirect(`/listings/${id}`);
};
