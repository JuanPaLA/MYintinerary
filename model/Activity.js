const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ActivitySchema = new Schema({
  details: {
    type: Array
  },
  title: {
    type: String,
    required: true
  },
  comments: {
    type: Array
  },
  pic: {
    type: String
  },
  itineraryId: {
    type: mongoose.Schema.Types.ObjectId
  }
});

module.exports = Activity = mongoose.model('activity', ActivitySchema);
