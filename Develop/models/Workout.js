let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let workoutSchema = new Schema({
  day: { type: Date, required: true },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

let Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;