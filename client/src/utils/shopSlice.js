import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  },
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload.products;
    },

    addNewToCart: (state, action) => {
      state.cart.push(action.payload.product);
    },

    addMultipleToCart: (state, action) => {
      state.cart.concat(action.payload.products);
    },

    updateCarQuantity: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (action.payload._id === product._id) {
          product.purchaseQuantity = action.payload.purchaseQuantity;
        }
        return product;
      });
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
    },

    clearCart: (state) => {
      // state.value -= 1;
    },
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },

    updateCategories: (state, action) => {
      state.categories = action.payload.categories;
    },

    updateCurrentCategories: (state, action) => {
      state.currentCategory = action.payload.currentCategory;
    },
  },
});

export const {
  updateProducts,
  addNewToCart,
  addMultipleToCart,
  updateCarQuantity,
  removeFromCart,
  clearCart,
  toggleCart,
  updateCategories,
  updateCurrentCategories,
} = shopSlice.actions;

export default shopSlice.reducer;
