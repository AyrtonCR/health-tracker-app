const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new Schema({
  food: { type: String, required: false },
});

module.exports = mongoose.model("Food", foodSchema);
