const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    required: true,
    min: 20.00
  },
  Burger: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Burger'
    }
  ],
  Fry: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Fry'
    }
  ],
  Drink: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Burger'
    }
  ],
});

const Order = model('Order', orderSchema);

module.exports = Order;
