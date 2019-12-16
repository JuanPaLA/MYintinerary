// const express = require("express");
// const router = express.Router();
// var userModel=require('./../../model/User');
// const bcrypt = require("bcryptjs");
// const Key = require('./../../config/keys').secretKey;
// const jwt = require("jsonwebtoken");
// // const passport=require('../passport/passport')


// const { check, validationResult } = require('express-validator');

// router.post('/user/login', [
//     check('email').isEmail(),
//     check('password').isLength({ min: 4 })
// ], 
//     async (req, res) => {
//     const errors = validationResult(req.body);
    
//     const{email,password}=req.body;

//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }
    
//    const User= await userModel.findOne({email});
   
//    if (!User){
//        return res.status(400).json({msg:"Username does not exist"});
//       }
//    else {
//             const isCorrect= await bcrypt.compare(password,User.password);
//             if(!isCorrect){
//                 return res.status(400).json({msg:"Invalid password"});
//             }
//    }
//    const options = {expiresIn: 2592000};
//    jwt.sign(
//     { id: User.id },
//       Key.secretKey,
//      options,
//      (err, token) => {
//        if(err){
//          res.json({
//            success: false,
//            token: "There was an error"
//          });
//        }else {
//          res.json({
//            success: true,
//            token: token
//          });
//        }
//      }
//    );


// });

// module.exports = router;
