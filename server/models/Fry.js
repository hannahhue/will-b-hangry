const { Schema, model } = require('mongoose');

const frySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  poutine: {
    type: Boolean,
    default: false,
  },
  cheese: {
    type: Boolean,
    default: false,
  },
});

const Fry = model('Fry', frySchema);

module.exports = Fry;