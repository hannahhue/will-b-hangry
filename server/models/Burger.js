//define
const { Schema, model } = require('mongoose');

//burg mod
const burgerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
    min: 0.99,
  },
  // topping: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Topping',
  //   required: true
  // }
});

const Burger = model('Burger', burgerSchema);

module.exports = Burger;
