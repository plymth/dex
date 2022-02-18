import { configureStore } from '@reduxjs/toolkit';
import { swapReducer } from './reducers/Swap.reducer';

const store = configureStore({
  reducer: {
    swap: swapReducer,
  },
});

export default store;
