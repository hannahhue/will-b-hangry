const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Fry {
    _id: ID
    name: String!
    image: String
    price: Float!
  }

  type Topping {
    _id: ID!
    name: String!
    image: String
    price: Float!
  }

  type Drink {
    _id: ID!
    name: String!
    image: String
    price: Float!
  }

  type Order {
    _id: ID!
    burgers: [ID]
    fries: [ID]
    drinks: [ID]
    toppings: [ID]
    amount: Float
  }

  type Burger {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float
  }

  type Checkout {
    session: ID
  }

  type Query {
    user: [User]
    drink(_id: ID!): Drink
    drinks: [Drink]
    burger(_id: ID!): Burger
    burgers: [Burger]
    fry: [Fry]
    topping(_id: ID!): Topping
    toppings: [Topping]
    orders: [Order]
    checkout(burgers: [ID], fries: [ID], drinks: [ID], toppings: [ID]): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth

    addOrder(
      burgers: [ID]
      fries: [ID]
      drinks: [ID]
      toppings: [ID]
      amount: Float
    ): Order
  }
`;

module.exports = typeDefs;
