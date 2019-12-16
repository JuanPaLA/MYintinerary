const express = require('express');
const router = express.Router();

//User Model
const User = require('../../model/User');

//----ENCRIPTACIÓN-------
var bcrypt = require('bcryptjs');
//----VALIDACIÓN
const { check, validationResult } = require('express-validator');

//@route GET api/users
//@desc get All users
//@access public
router.get('/users', (req, res) => {
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

//@route POST api/users
//@desc post a user
//@access public
router.post('/user', [
    check('email').isEmail(),
    check('password').isLength({ min:5 })
], 
    (req, res) => {
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
    return res.send("user succesfully registered")
    
    })
})


/*--------LOGIN ROUTE-------- */
//----AUTENTIFICACIÓN-------


// //@route LOGIN - POST api/user
// //@desc LOGIN a user
// //@access public
// router.post('/user/login/', () => {
//     console.log("algo")
// }

// //@route LOGIN - GOOGLE- POST api/user
// //@desc LOGIN a user
// //@access public

const key = require('../../config/keys').secretKey;
const jwt = require("jsonwebtoken");
router.post('/usuario/login', (req, res) => {
    console.log(req.body)
    User.findOne({email: req.body.email})
    .then(User => {
        if(User){
            let login = bcrypt.compare(req.body.password, User.password)
            if(login){
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
                            res.send({succes: false, token:"error en login"})
                        }else{
                            res.send({succes:true, token})
                        }
                    }                    
                )
            }else{
                res.send({mensaje: "la contraseña no es correcta"})
            }
        }else{
            res.send({mensaje: "usuario inexistente"})
        }
    })
})

router.get('/glogin', (req, res) =>{
    // res.redirect('api/users/google/redire<ct')
    // console.log("locura máxima")
    return res.send("google login")

})


// app.get('/love', (req, res) => {
//     res.send('Hi Love');
// });

module.exports = router;