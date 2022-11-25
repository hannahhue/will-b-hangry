import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation AddOrder(
    $toppings: [ID]
    $amount: Float
    $burgers: [ID]
    $fries: [FryData]
    $drinks: [ID]
  ) {
    addOrder(
      toppings: $toppings
      amount: $amount
      burgers: $burgers
      fries: $fries
      drinks: $drinks
    ) {
      _id
      amount
      burgers {
        _id
        name
        description
        image
        price
      }
      drinks {
        _id
        name
        image
        price
      }
      fries {
        name
        image
        poutine
        cheese
        price
      }
      toppings {
        _id
        name
        image
        price
      }
    }
  }
`;
