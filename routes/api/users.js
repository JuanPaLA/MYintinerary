const express = require('express');
const router = express.Router();

//User Model
const User = require('../../model/User');

//@route GET api/users
//@desc get All users
//@access public
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
});

//@route POST api/users
//@desc post a user
//@access public
router.post('/', (req, res) => {
    console.log("POST A USER")
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    console.log(newUser.userName)
    newUser.save().then(user => res.json(user))
})

module.exports = router;