const { AuthenticationError } = require('apollo-server-express');
const { User, Burger, Order, Drink, Fry } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      // if (context.user) {
      // const user = await User.findById(context.user._id);
      const user = await User.find().populate([
        { path: 'orders' },
        { path: 'orders.drinks' },
        { path: 'orders.burgers' },
        { path: 'orders.toppings' },
        { path: 'orders.fries' },
      ]);

      return user;
      // }

      // throw new AuthenticationError('Not logged in');
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
  },
};

module.exports = resolvers;
