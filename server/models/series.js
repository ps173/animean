const mongoose = require("mongoose");

// schema for Series
const snippetSchema = new mongoose.Schema({
    Slug: {
        // just a short name for searching the db
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    YoutubePlaylistUrl: {
        type: String,
        required: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});

snippetSchema.path("YoutubePlaylistUrl").validate((val) => {
    urlRegex =
        /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, "Invalid URL.");

module.exports = mongoose.model("Series", snippetSchema);
