const { AuthenticationError } = require('apollo-server-express');
const {
  User,
  Burger,
  Order,
  Drink,
  Fry,
  Topping,
  Combo,
} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate([
          { path: 'orders' },
          { path: 'orders.drinks' },
          { path: 'orders.burgers' },
          { path: 'orders.toppings' },
          { path: 'orders.fries' },
        ]);

        // const user = await User.find()
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    burgers: async () => {
      const burgers = await Burger.find();
      return burgers;
    },

    orders: async () => {
      const orders = await Order.find().populate([
        'burgers',
        'fries',
        'drinks',
        'toppings',
      ]);
      return orders;
    },

    drinks: async () => {
      const drinks = await Drink.find();
      return drinks;
    },

    fry: async () => {
      const fries = await Fry.find();
      return fries;
    },
    toppings: async () => {
      const toppings = await Topping.find();
      return toppings;
    },

    checkout: async (parent, { combo }, context) => {
      const url = new URL(context.headers.referer).origin;
      console.log(combo);
      const NewCombo = new Combo(combo[0]);
      console.log(await NewCombo.populate('burgers'));
      // const order = new Order({ products: args.products });
      // const line_items = [];

      // const { products } = await order.populate('products');

      // for (let i = 0; i < products.length; i++) {
      //   const product = await stripe.products.create({
      //     name: products[i].name,
      //     description: products[i].description,
      //     images: [`${url}/images/${products[i].image}`],
      //   });

      //   const price = await stripe.prices.create({
      //     product: product.id,
      //     unit_amount: products[i].price * 100,
      //     currency: 'usd',
      //   });

      //   line_items.push({
      //     price: price.id,
      //     quantity: 1,
      //   });
      // }

      // const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ['card'],
      //   line_items,
      //   mode: 'payment',
      //   success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
      //   cancel_url: `${url}/`,
      // });

      // return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addOrder: async (parent, arg, context) => {
      const newOrder = await Order.create({ ...arg });
      return newOrder;
    },
  },
};

module.exports = resolvers;
