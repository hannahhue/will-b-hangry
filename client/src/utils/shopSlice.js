import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    toppings: [],
    products: [],
    drinks: [],
    fries: [],
    burgers: [],
    cart: {
      burgers: [],
    },
    cartOpen: false,
  },

  // cart: {
  //     burgers: [
  //       {
  //         name: '',
  //         description: '',
  //         price: '',
  //         topping: [],
  //         fries: [],
  //         drinks: [],
  //       },
  //     ],

  reducers: {
    updateBurger: (state, action) => {
      state.burgers = action.payload.burgers;
    },
    updateFry: (state, action) => {
      state.fries = action.payload.fries;
    },
    updateDrink: (state, action) => {
      state.drinks = action.payload.drinks;
    },
    updateTopping: (state, action) => {
      state.toppings = action.payload.toppings;
    },

    /*
    cart:
      {
        burgers:[],
        fries:[],
        toppings:[],
        drinks:[]
      }
    */
    //expect object including array --- {burgers:[{name:'burger1', price:'xxx',...}]}
    //so action.payload = {burgers:[{name:'burger1', price:'xxx',...}]}
    addToCart: (state, action) => {
      if (action.payload.burgers) {
        state.cart.burgers = state.cart.burgers.concat(action.payload.burgers);
      }
      if (action.payload.fries) {
        state.cart.fries = state.cart.fries.concat(action.payload.fries);
      }
      if (action.payload.drinks) {
        state.cart.drinks = state.cart.drinks.concat(action.payload.drinks);
      }
      if (action.payload.toppings) {
        state.cart.toppings = state.cart.toppings.concat(
          action.payload.toppings
        );
      }
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
  updateBurger,
  updateDrink,
  updateTopping,
  updateFry,
  addToCart,
  removeFromCart,
  clearCart,
  toggleCart,
} = shopSlice.actions;

export default shopSlice.reducer;
