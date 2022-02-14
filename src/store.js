import { configureStore } from '@reduxjs/toolkit';
import swapReducer from './features/swap/swapSlice';

export default configureStore({
  reducer: {
    swap: swapReducer,
  },
});
