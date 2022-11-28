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
      combo: [],
    },
    cartOpen: false,
    wishList: [],
  },
  /*
  cart: {
      combo: [

        // have a single burger
        { burgers: [{id:.., name:'burger1',price:10,}]
          topping: [{},{},{}],
          fries: [{}],
          drinks: [],
        },

        // has a bull combo set
        { burgers:[ name:'burger1',price:10,]
          topping: [name:xxx... ],
          fries: [name:xxx...],
          drinks: [name:xxx...],
        },
      ],
    }
  */

  // cart: {
  //     combo:[
  //       {
  //         burgers: []
  //         topping: [],
  //         fries: [],
  //         drinks: [],
  //       },
  //      ]
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
      state.cart.combo.push(action.payload);
    },

    addToWish: (state, action) => {
      state.wishList.push(action.payload);
    },
    // _id:xxx
    removeFromCart: (state, action) => {
      console.log(action.payload._id);

      const result = state.cart.combo.filter((item) => {
        console.log(item.burgers[0]._id);
        if (item.burgers[0]._id !== action.payload._id) {
          return true;
        } else {
          return false;
        }
      });

      console.log(result);
      state.cart.combo = [...result];

      // state.cart = state.cart.filter(
      //   (product) => product._id !== action.payload._id
      // );
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
