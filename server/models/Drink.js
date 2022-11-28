//define
const { Schema, model } = require('mongoose');

//drink mods
const drinkSchema = new Schema({
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

const Drink = model('Drink', drinkSchema);

module.exports = Drink;
