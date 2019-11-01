const express = require('express');
const router = express.Router();

//City Model
const City = require('../../model/City');

// @route   GET api/cities
// @desc    get All cities
// @access  Public

router.get('/', (req, res) => {
    City.find()
        .then(cities => res.json(cities))
});

// @route   POST api/cities
// @desc    post a citiy
// @access  Public

router.post('/', (req, res) => {
    const newCity = new City({
        country: req.body.country,
        city: req.body.city
    });
    newCity.save().then(city => res.json(city));
});

// @route   DELETE api/cities/:id
// @desc    delete a citiy
// @access  Public

router.delete('/:id', (req, res) => {
    City.findById(req.params.id)
        .then(city => city.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router; 