const Workout = require("../models");
const router = require("express").Router();

// create workout route
router.post("api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// add exercise route

// get last workout route

// get workouts in range (i think "in range" means for that day)