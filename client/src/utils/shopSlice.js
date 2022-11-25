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
    wishList: [],
  },

  // cart: {
  //     burgers: [
  //       {
  //         _id:
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
      state.fries = action.payload.fry;
    },
    updateDrink: (state, action) => {
      state.drinks = action.payload.drinks;
    },
    updateTopping: (state, action) => {
      state.toppings = action.payload.toppings;
    },
    //expect object including array --- {burger:{name:'burger1', price:'xxx',...}}
    //so action.payload = {burger:{name:'burger1', price:'xxx',...}}
    addToCart: (state, action) => {
      state.cart.burgers.push(action.payload);
    },

    addToWish: (state, action) => {
      state.wishList.push(action.payload);
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
  addToWish,
} = shopSlice.actions;

export default shopSlice.reducer;
