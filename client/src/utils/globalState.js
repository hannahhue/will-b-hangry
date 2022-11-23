import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';

export default configureStore({
  reducer: {
    shop: shopReducer,
  },
});
