const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema ({
    userName: {
        type: String
    },
    email: {
        type: String,
        value: "default@default.com"
    },
    password: {
        type: String
     
    }
});

module.exports = User = mongoose.model('users', UserSchema)
