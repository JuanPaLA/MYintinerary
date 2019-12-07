const express = require('express');
const router = express.Router();
var bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const key = require('../../config/keys').secretKey;
const jwt = require("jsonwebtoken");

//User Model
const User = require('../../model/User');

//@route GET api/users
//@desc get All users
//@access public
router.get('/users', (req, res) => {
    console.log("hay ruta")
    User.find()
    .then(users => res.json(users))
});


//@route GET api/user/email
//@desc GET a user by email
//@access public
router.get('/user/:email', (req, res) => {
    User.findOne({email: req.params.email})
    .then(user => res.json(user))
    
});

router.post('user/login')

//@route POST api/users
//@desc post a user
//@access public
router.post('/user', [
    check('email').isEmail(),
    check('password').isLength({ min:5 })
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    
    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            return res.send("user already registered")
        }

        var hash = bcrypt.hashSync(req.body.password, 8);
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            password: hash
    })
    newUser.save().then(user => res.json(user))
    return res.send("user succesfully registerd")
    
    })
})

module.exports = router;