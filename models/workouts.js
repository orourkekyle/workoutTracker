const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  date: {
    type: Date,
    default: Date.now
  },

  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter exercise type"
    },

    name: {
      type: String,
      trim: true,
      required: "Enter Workout Name"
    },

    duration: {
      type: Number,
      required: "Please enter duration of workout"
    },

    weight: {
      type: Number
    },

    reps: {
      type: Number
    },

    sets: {
      type: Number
    },

    distance: {
      type: Number
    }
  }],
},
  {
    toJSON:
    {
      virtuals: true
    }
  }
);

// manoli said trim needs to go somewhere


workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercises) => {
    return total + exercises.duration;
  }, 0);
});


const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;