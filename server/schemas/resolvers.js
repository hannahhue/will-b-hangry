//define
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

    checkout: async (parent, { combo }, context) => {
      const url = new URL(context.headers.referer).origin;
      console.log(combo);
      // console.log(await NewCombo.populate('burgers'));
      // console.log(await NewCombo.populate('toppings'));

      const line_items = [];

      for (let x = 0; x < combo.length; x++) {
        const NewCombo = new Combo(combo[x]);
        const { burgers } = await NewCombo.populate('burgers');
        const { toppings } = await NewCombo.populate('toppings');
        const { fries } = await NewCombo.populate('fries');
        const { drinks } = await NewCombo.populate('drinks');

        for (let i = 0; i < burgers.length; i++) {
          const burger = await stripe.products.create({
            name: burgers[i].name,
            description: burgers[i].description,
            images: [`${url}/images/${burgers[i].image}`],
          });

          const price = await stripe.prices.create({
            product: burger.id,
            unit_amount: burgers[i].price * 100,
            currency: 'usd',
          });

          line_items.push({
            price: price.id,
            quantity: 1,
          });

          for (let j = 0; j < toppings.length; j++) {
            const topping = await stripe.products.create({
              name: toppings[j].name,
            });

            const price = await stripe.prices.create({
              product: topping.id,
              unit_amount: toppings[j].price * 100,
              currency: 'usd',
            });

            line_items.push({
              price: price.id,
              quantity: 1,
            });
          }

          for (let j = 0; j < fries.length; j++) {
            const fry = await stripe.products.create({
              name: fries[j].name,
            });

            const price = await stripe.prices.create({
              product: fry.id,
              unit_amount: fries[j].price * 100,
              currency: 'usd',
            });

            line_items.push({
              price: price.id,
              quantity: 1,
            });
          }

          for (let j = 0; j < drinks.length; j++) {
            const drink = await stripe.products.create({
              name: drinks[j].name,
            });

            const price = await stripe.prices.create({
              product: drink.id,
              unit_amount: drinks[j].price * 100,
              currency: 'usd',
            });

            line_items.push({
              price: price.id,
              quantity: 1,
            });
          }
        }
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
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
