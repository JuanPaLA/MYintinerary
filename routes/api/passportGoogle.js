const passport = require('passport');
const userModel = require('../../model/User');

//--------------GOOGLE PASSPORT---------------------//

var GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('../../config/keys').secretKey;
const jwt = require("jsonwebtoken");

passport.use(new GoogleStrategy({
  clientID:"684157333470-3v0t48eqkui7rgt9osqku8vj3r22hnd8.apps.googleusercontent.com",
  clientSecret:"fTD2XWnX50CJlk7KZCyZOO-5",
  callbackURL: "http://localhost:5000/api/glogin/callback"
 },
 function(accessToken, refreshToken, profile, cb) {
   console.log(profile)
   userModel.findOne({ email: profile._json.email }, function (err, user) {     
     if(user){
      let options = {
                    expiresIn: 100000,
                }
                let payload = {
                    _id: User._id,
                    email: User.email,
                    password: User.password
                }
                jwt.sign(
                    payload, 
                    key,
                    options,
                    (err, token) => {
                        if(err){
                          cb(err, false)
                        }else{
                          cb(null,token, {mensaje:false})
                        }
                    }                    
                )
     }else{
       cb(null, profile._json, {mensaje:true})
     }
   });
 }
));