let mongoose = require("mongoose");

let schema = mongoose.schema;
let exerciseSchema = new schema({
  name: { type: String, required: true },
  reps: { type: Number },
  sets: { type: Number },
  weight: { type: Number },
  minutes: { type: Number }
});

let Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;