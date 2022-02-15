import { configureStore } from '@reduxjs/toolkit';
import swapReducer from './features/swap/swapSlice';

// Define selectors and reducer functions
// Define a slice called swapSlice

export default configureStore({
  reducer: {
    swap: swapReducer,
  },
});
