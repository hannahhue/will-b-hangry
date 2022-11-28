//define
const { Schema, model } = require('mongoose');

//toppings mod
const toppingSchema = new Schema({
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
  },
});

const Topping = model('Topping', toppingSchema);

module.exports = Topping;
