const db = require('./connection');
const {
  User,
  Fry,
  Drink,
  Burger,
  Topping,
  Order,
  Combo,
} = require('../models');

db.once('open', async () => {
  await Fry.deleteMany();

  const fry = await Fry.insertMany([
    {
      name: 'Fry',
      image: 'fry.png',
      price: 3.99,
    },
    {
      name: 'Poutine',
      image: 'poutine.webp',
      price: 5.99,
    },
    {
      name: 'Cheese Fries',
      image: 'cheese.png',
      price: 5.99,
    },
  ]);

  console.log('fires seeded');

  await Burger.deleteMany();

  const burger = await Burger.insertMany([
    {
      name: 'Will Burger',
      description: 'Double pattys, bacon, and cheese',
      image: 'double-bac.png',
      price: 14.99,
    },
    {
      name: 'B Burger',
      description: 'Mushroom Melt, swiss cheese, and fresh mushrooms',
      image: 'mush-burg.png',
      price: 14.99,
    },
    {
      name: 'Hangry Burger',
      description: 'Breakfest Burger, fried eggs, ham, and cheese',
      image: 'egg-burg.png',
      price: 14.99,
    },
  ]);

  console.log('Burger seeded');

  await Drink.deleteMany();

  const drink = await Drink.insertMany([
    {
      name: 'Pepsi',
      image: 'pepsi-drink.png',
      price: 3.99,
    },
    {
      name: 'Fanta',
      image: 'fanta-drink.png',
      price: 3.99,
    },
    {
      name: 'Coca-cola',
      image: 'coke-drink.png',
      price: 3.99,
    },
  ]);
  console.log('Drink seeded');

  await Topping.deleteMany();

  const topping = await Topping.insertMany([
    {
      name: 'Bacon',
      price: 0.99,
    },
    {
      name: 'Tomatoes',
      price: 0.99,
    },
    {
      name: 'Cheese',
      price: 0.99,
    },
    {
      name: 'Pickles',
      price: 0.99,
    },
    {
      name: 'Lettuce',
      price: 0.99,
    },
    {
      name: 'Ketchup',
      price: 0.99,
    },
    {
      name: 'Mustard',
      price: 0.99,
    },
    {
      name: 'Mayo',
      price: 0.99,
    },
  ]);
  console.log('Topping seeded');

  await Combo.deleteMany();

  const newCombo = {
    burgers: [burger[0]._id],
    fries: [fry[0]._id],
    drinks: [drink[0]._id],
    toppings: [topping[0]._id, topping[1]._id, topping[2]._id],
  };

  const combo = await Combo.insertMany([
    {
      ...newCombo,
    },
  ]);

  console.log('combo seeded');

  await Order.deleteMany();

  const order = await Order.insertMany([
    { combos: [combo[0]._id], amount: 22 },
  ]);
  console.log('order seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'user1',
    lastName: 'user1',
    email: 'user1@email.com',
    password: 'password12345',
    orders: [order[0]],
  });

  await User.create({
    firstName: 'user2',
    lastName: 'user2',
    email: 'user2@emial.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});
