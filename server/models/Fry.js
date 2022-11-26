const { Schema, model } = require('mongoose');

// normal fries
// cheese fries
// poutine
const frySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
});

const Fry = model('Fry', frySchema);

module.exports = Fry;
