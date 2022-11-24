const db = require('./connection');
const { User, Fry, Drink, Burger, Topping, Order } = require('../models');

db.once('open', async () => {
  await Fry.deleteMany();

  const fry = await Fry.insertMany([
    {
      name: 'Fry',
      image:
        'https://littlesunnykitchen.com/wp-content/uploads/2020/09/French-Fry-Seasoning-7.jpg',
      price: 1.99,
    },
  ]);

  console.log('categories seeded');

  await Burger.deleteMany();

  const burger = await Burger.insertMany([
    {
      name: 'Burger1',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://foodish-api.herokuapp.com/images/burger/burger87.jpg',
      price: 9.99,
    },
    {
      name: 'Burger2',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://foodish-api.herokuapp.com/images/burger/burger79.jpg',
      price: 9.99,
    },
    {
      name: 'Burger3',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'https://foodish-api.herokuapp.com/images/burger/burger65.jpg',
      price: 9.99,
    },
  ]);

  console.log('Burger seeded');

  await Drink.deleteMany();

  const drink = await Drink.insertMany([
    {
      name: 'Pepsi',
      image:
        'https://daanapaanisupermarket.ca/wp-content/uploads/2021/11/pepsi-soft-drink.jpg',
      price: 1.99,
    },
    {
      name: 'Fanta',
      image:
        'https://daanapaanisupermarket.ca/wp-content/uploads/2021/11/fanta-soft-drink-can-300ml.jpg',
      price: 1.99,
    },
    {
      name: 'Coca-cola',
      image:
        'https://daanapaanisupermarket.ca/wp-content/uploads/2021/11/coca-cola-soft-drink-can-300ml.jpg',
      price: 1.99,
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
      name: 'Pickle',
      price: 0.99,
    },
    {
      name: 'Lettuce',
      price: 0.99,
    },
  ]);
  console.log('Topping seeded');

  await Order.deleteMany();

  const newOrder = {
    burgers: [burger[0]._id],
    fries: [{ ...fry[0], cheese: true }],
    drinks: [drink[0]._id],
    toppings: [topping[0]._id, topping[1]._id, topping[2]._id],
    amount: 22,
  };

  const order = await Order.insertMany([
    {
      ...newOrder,
    },
  ]);
  console.log(topping[0]);
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
