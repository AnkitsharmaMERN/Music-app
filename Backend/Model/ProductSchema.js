const mongoose = require("mongoose");




const productschema = new mongoose.Schema({

    SongName: {
        type: String,
        required: true
    },
    AlbumName: {
        type: String,
        required: true
    },
    ArtistName: {
        type: String,
        required: true
    },
    SongImg: {
        type: String,
        // required: true
    },
    Song: {
        type: String,
        // required: true
    },
    SongDetails: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    }
})

const productdetails = mongoose.model('productdetails', productschema)

module.exports = productdetails