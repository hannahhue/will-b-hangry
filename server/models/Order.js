const { Schema, model } = require('mongoose');
const Fry = require('./Fry');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  burgers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Burger',
    },
  ],
  fries: [Fry.schema],
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

const Order = model('Order', orderSchema);

module.exports = Order;
