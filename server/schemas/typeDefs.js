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
    name: String!
    image: String
    poutine: Boolean
    cheese: Boolean
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
    burgers: [Burger]
    fries: [Fry]
    drinks: [Drink]
    toppings: [Topping]
    amount: Float
  }

  input FryData {
    name: String
    image: String
    price: Float
    poutine: Boolean
    cheese: Boolean
  }

  type Burger {
    _id: ID
    name: String!
    description: String
    image: String
    price: Float
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
      fries: [FryData]
      drinks: [ID]
      toppings: [ID]
      amount: Float
    ): Order
  }
`;

module.exports = typeDefs;
