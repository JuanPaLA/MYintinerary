const express = require('express');
const router = express.Router();

//Itinerary Model
const Itinerary = require('../../model/Itinerary');

// @route   GET api/itineraries
// @desc    get All itinerary
// @access  Public
router.get('/itineraries', (req, res) => {
    Itinerary.find()
        .then(itineraries => res.json(itineraries))
});



// @route   POST api/itineraries
// @desc    post a itinerary
// @access  Public
router.post('/itinerary', (req, res) => {
    console.log("POST ITINERARY")
    console.log(req.body.title)
    const newItinerary = new Itinerary({
        title: req.body.title,
        profilePic: req.body.profilePic,
        rating: req.body.rating,
        duration: req.body.duration,
        price: req.body.price,
        hashtag: req.body.hashtag,
        cityId: req.body.cityId
    });
    newItinerary.save().then(itinerary => res.json(itinerary));
});


// @route   DELETE api/itineraries/:id
// @desc    delete a itinerary
// @access  Public

router.delete('/itinerary/:id', (req, res) => {
    Itinerary.findById(req.params.id)
        .then(itinerary => itinerary.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({
            success: false
        }));
});


// @route   GET api/itineraries/:id
// @desc    get a itinerary
// @access  Public

router.get('/itinerary/:id', (req, res) => {
    
    Itinerary.findById(req.params.id)
        .then(itineraries => itineraries.json(itineraries))
        .then(data => res.json(data)).catch((err)=>console.log(err))
     
})

router.get('/itineraries/:idCity', (req, res) => {
    // console.log(req.params.idCity);

    // console.log('get intineraries por city');
    Itinerary.find({ cityId: req.params.idCity })
        .catch(err => console.log("juan perez"))
        .then(itineraries => res.json(itineraries))
})


// @route   GET api/itineraries/:cityId --> fetch it by "cityId"
// @desc    get a itinerary
// @access  Public

router.get('/:cityId', (req, res) => {
    Itinerary.findOne(req.params.cityId)
        .then(itineraries => res.json(itineraries))
        .then(data => console.log(data))
})

module.exports = router;