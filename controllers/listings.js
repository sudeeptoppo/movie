const listing = require("../models/listing");

module.exports.index = async (req, res) => {
  const allListings = await listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewFrom = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "send valid data for listing");
  }
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new listing(req.body.listing);
  console.log(req.user);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  console.log(newListing);
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
  console.log(foundListing);
  if (!foundListing) {
    req.flash("error", "listing not found");
    res.redirect("/listings");
  }
  console.log(foundListing);
  res.render("listings/show.ejs", { listing: foundListing });
};

module.exports.renderEdit = async (req, res) => {
  let { id } = req.params;
  const foundListing = await listing.findById(id);
  console.log(foundListing);
  res.render("listings/edit.ejs", { listing: foundListing });
};

module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(400, "send valid data for listing");
  }
  let { id } = req.params;
  let updated = await listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    updated.image = { url, filename };
    await updated.save();
  }
  console.log(updated);
  req.flash("success", "listing updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "listing deleted");
  res.redirect("/listings");
};
