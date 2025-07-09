const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
        
    },
    author: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "image_link",
        set: (v) => 
            v === "" ? "image_link": v,
    },
    rating: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    }


});

const listings = mongoose.model("listing", listingSchema);
module.exports = listings;