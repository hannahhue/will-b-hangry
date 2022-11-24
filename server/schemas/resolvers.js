const { AuthenticationError } = require('apollo-server-express');
const { User, Burger, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      // if (context.user) {
      // const user = await User.findById(context.user._id);
      const user = await User.find();

      return user;
      // }

      // throw new AuthenticationError('Not logged in');
    },
    burgers: async () => {
      const burgers = await Burger.find();
      return burgers;
    },

    orders: async () => {
      const orders = await Order.find();
      return orders;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
