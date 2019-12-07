const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItinerarySchema = new Schema({
  title: {
    type: String
  },
  profilePic: {
    type: String
  },
  rating: {
    type: Number
  },
  duration: {
    type: Number
  },
  price: {
    type: Number
  },
  hashtag: {
    type: Array
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cities"
  }
});

module.exports = Itinerary = mongoose.model('itineraries', ItinerarySchema);
