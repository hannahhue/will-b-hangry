import { gql } from '@apollo/client';

export const QUERY_BURGERS = gql`
  query Burgers {
    burgers {
      _id
      name
      description
      image
      price
    }
  }
`;
export const QUERY_FRY = gql`
  query Fry {
    fry {
      name
      image
      poutine
      cheese
      price
    }
  }
`;
export const QUERY_TOPPINGS = gql`
  query Toppings {
    toppings {
      _id
      name
      image
      price
    }
  }
`;
export const QUERY_DRINKS = gql`
  query Drinks {
    drinks {
      _id
      name
      image
      price
    }
  }
`;
export const QUERY_USER = gql`
  query User {
    user {
      _id
      firstName
      lastName
      email
      password
      orders {
        _id
        burgers {
          _id
          name
          description
          image
          price
        }
        fries {
          cheese
          image
          name
          poutine
          price
        }
        drinks {
          _id
          name
          image
          price
        }
        toppings {
          _id
          name
          image
          price
        }
        amount
      }
    }
  }
`;
