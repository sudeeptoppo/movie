const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "image_link",
        set: (v) => 
            v === "" ? "image_link": v,
    },
    rating: Number


});

const listings = mongoose.model("listing", listingSchema);
module.exports = listings;