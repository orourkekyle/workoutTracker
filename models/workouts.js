const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
     Date: {
        type: Date,
        default: Date.now
    },
  type: {
    type: String,
    unique: true,
    required: "Enter exercise type"
  },
  name: {
    type: Schema.Types.ObjectId,
    ref: "Note",
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
});


const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;