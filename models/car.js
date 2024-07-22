

const mongoose = require("mongoose");


//   Create the schema :
const carsSchema = new mongoose.Schema({
    name: String,
    model: String,
    year: Number,
    isElectric:Boolean,
});

// create model :
const cars = mongoose.model("cars", carsSchema);

module.exports = cars;