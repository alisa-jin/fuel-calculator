const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  water: {
    type: Number,
    required: true
  }
});

const Food = mongoose.model('Food', foodSchema);

// You must export your model through module.exports
// The collection name should be 'student'
module.exports = Food;