const Workout = require("../models/workouts");
const router = require("express").Router();
const mongojs = require("mongojs");

// create workout route
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

// add exercise to last workout route
router.put("/api/workouts/:id", (req, res) => {
  console.log("this is req.params.id in put route: ", req.params.id);
  Workout.updateOne({ _id: req.params.id },
    // { new: true, runValidators: true },
    {
    $push: {
      exercises: [{
        _id: mongojs.ObjectId(),
        ...req.body,
      }],
    },
  },
  { new: true, runValidators: true })
  .then(dbNewExercise => {
    console.log("this is dbNewExercise in put route: ", dbNewExercise);
    res.json(dbNewExercise);
  }).catch(err => {
    res.status(400).json(err);
  });
});

// get last workout route
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      // console.log("this is dbWorkout in route: ", dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// get workouts in range (i think "in range" means for that day)
router.get('/api/workouts/range', (req, res) => {
  // Replace <METHOD> with method to Find all workouts then limit with range
  // Look into mongoose doc for how to limit with range
  // Fill in the input argument(s) to the method

  Workout.findAll()

    // Fill in .then() with call back function that takes result from db as input argument and send it back to browser
    .then()

    // Fill in .catch() with call back function that takes error as input argument and send it back to browser
    .catch();
});


// export route
module.exports = router;