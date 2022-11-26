const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  combos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Combo',
    },
  ],
});

const Order = model('Order', orderSchema);

module.exports = Order;
