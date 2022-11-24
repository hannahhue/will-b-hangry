import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  // initialState: {
  // toppings:[],
  // products: [],
  // drinks:[],
  // fries:[],
  // burgers:[],
  // cart: [],
  // cartOpen: false,
  // },
  initialState: {
    toppings: [
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
    ],
    drinks: [
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
    ],
    fries: [
      {
        name: 'Fry',
        image:
          'https://littlesunnykitchen.com/wp-content/uploads/2020/09/French-Fry-Seasoning-7.jpg',
        price: 1.99,
      },
    ],
    burgers: [
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
    ],
    cart: [],
    cartOpen: false,
  },

  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload.products;
    },

    //expect burger object ---  {name:'burger1', price:'xxx',...}
    //so   action.payload = {name:'xxx', price:'xxx',...}
    addBurgerToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
    },

    clearCart: (state) => {},
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const {
  updateProducts,
  addBurgerToCart,
  removeFromCart,
  clearCart,
  toggleCart,
} = shopSlice.actions;

export default shopSlice.reducer;
