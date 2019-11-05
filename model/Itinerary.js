const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItinerarySchema = new Schema({
    title: {
        type: String
    },
    profilePic: {
        type: String,
    },
    rating: {
        type: Number,        
    },
    durantion: {
        type: Number,        
    },
    price: {
        type: Number,        
    },
    hashtag: {
        type: Array,        
    }
});

module.exports = Itinerary = mongoose.model('itinerary', ItinerarySchema);