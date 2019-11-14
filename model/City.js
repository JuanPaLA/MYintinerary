const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const CitySchema = new Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    urlPic: {
        type: String
    }
});

module.exports = City = mongoose.model('city', CitySchema);