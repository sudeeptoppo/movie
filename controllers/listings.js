const listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const { q } = req.query;
  let allListings;
  if (q) {
    // Escape special characters in the query to prevent Regular Expression Denial of Service (ReDoS) attacks.
    const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedQ, "i");
    allListings = await listing.find({
      $or: [{ title: regex }, { author: regex }, { description: regex }],
    });
  } else {
    allListings = await listing.find({});
  }
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewFrom = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
  if (!req.body.listing) {
    // This check is redundant because of the `validateListing` middleware.
    // throw new ExpressError(400, "send valid data for listing");
  }
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "new book added");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const foundListing = await listing
    .findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!foundListing) {
    req.flash("error", "listing not found");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing: foundListing });
};

module.exports.renderEdit = async (req, res) => {
  let { id } = req.params;
  const foundListing = await listing.findById(id);
  if (!foundListing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing: foundListing });
};

module.exports.updateListing = async (req, res) => {
  // The `validateListing` middleware already handles this.
  let { id } = req.params;
  const updateData = { ...req.body.listing };

  if (req.file) {
    updateData.image = { url: req.file.path, filename: req.file.filename };
  }

  await listing.findByIdAndUpdate(id, updateData);

  req.flash("success", "listing updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await listing.findByIdAndDelete(id);
  req.flash("success", "listing deleted");
  res.redirect("/listings");
};
