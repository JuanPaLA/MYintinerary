const express = require('express');
const router = express.Router();

//Activity Model
const Activity = require('../../model/Activity');

// @route   GET api/activities
// @desc    get All activity
// @access  Public
router.get('/activities', (req, res) => {
  console.log("hay vida")
  Activity.find()
    .then(activities => res.json(activities));
    
});

// @route   POST api/itineraries
// @desc    post a itinerary
// @access  Public
router.post('/activity', (req, res) => {
  const newActivity = new Activity({
    details: req.body.details,
    comments: req.body.comments,
    title: req.body.title,
    pic: req.body.pic,
    itineraryId: req.body.itineraryId
  });
  newActivity.save().then(activity => res.json(activity));
});

// @route   DELETE api/activities/:id
// @desc    delete a activity
// @access  Public

router.delete('/activity/:id', (req, res) => {
  Activity.findById(req.params.id)
    .then(activity =>
      activity.remove().then(() =>
        res.json({
          success: true
        })
      )
    )
    .catch(err =>
      res.status(404).json({
        success: false
      })
    );
});

// @route   GET api/activities/:id
// @desc    get a activity
// @access  Public

router.get('/activity/:id', (req, res) => {
  Activity.findById(req.params.id)
    .then(activities => res.json(activities))
    .then(data => console.log(data));
});

/*¿Aha? */
router.get('/activities/itinerary/:idItinerary', (req, res) => {
  console.log(req.params.idItinerary);

  // console.log('get activities por itinerary');
  Activity.find({ itineraryId: req.params.idItinerary })
    .catch(err => console.log(err))
    .then(activities => res.json(activities));
});

router.get('/:itineraryId', (req, res) => {
  Activity.findOne(req.params.itineraryId)
    .then(activities => res.json(activities))
    .then(data => console.log(data));
});

module.exports = router;
