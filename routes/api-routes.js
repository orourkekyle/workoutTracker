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
  // Fill in the input argument(s) to the method
  console.log(mongojs.date);
  // what the fuck... why does this work?... does it actually
  Workout.find().sort({$natural:-1}).limit(7
  // could this also work with some tweaking?
  // .aggregate([
  //   {
  //     $search: {
  //       index: "exercise",
  //       range: {
  //         path: "exercises"
  //       }
  //     }
  //   },
  //   {
  //     $limit: 10
  //   },
  //   {
  //     $project: {
  //       duration: 1,
  //       weight: 1
  //     }
  //   }
  // ]
  ).then(dbRangeStuff => {
      console.log("this is dbRangeStuff: ", dbRangeStuff);
      res.json(dbRangeStuff);
    }).catch(err => {
      res.status(400).json(err);
    });
});


// export route
module.exports = router;