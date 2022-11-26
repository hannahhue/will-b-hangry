const { Schema, model } = require('mongoose');

const comboSchema = new Schema({
  burgers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Burger',
    },
  ],
  fries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Fry',
    },
  ],
  drinks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Drink',
    },
  ],
  toppings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Topping',
    },
  ],
});

const Combo = model('Combo', comboSchema);

module.exports = Combo;
