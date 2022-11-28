//define
const { AuthenticationError } = require('apollo-server-express');
const { User, Burger, Order, Drink, Fry, Topping } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // find user by id
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
    // finall all burgers
    burgers: async () => {
      const burgers = await Burger.find();
      return burgers;
    },

    // order aka cart
    orders: async () => {
      const orders = await Order.find().populate([
        'burgers',
        'fries',
        'drinks',
        'toppings',
      ]);
      return orders;
    },

    // find all drinks
    drinks: async () => {
      const drinks = await Drink.find();
      return drinks;
    },

    //find all fries
    fry: async () => {
      const fries = await Fry.find();
      return fries;
    },

    //find all toppings
    toppings: async () => {
      const toppings = await Topping.find();
      return toppings;
    },
  },
  Mutation: {
    // create new user and provide token
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    //find one user by email and pass accept/throw err
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

    // create new order per user
    addOrder: async (parent, arg, context) => {
      const newOrder = await Order.create({ ...arg });
      return newOrder;
    },
  },
};

module.exports = resolvers;
