const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  water: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  }
});

const Food = mongoose.model('Food', foodSchema);

// You must export your model through module.exports
module.exports = Food;