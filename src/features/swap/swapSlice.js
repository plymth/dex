import { createSlice } from '@reduxjs/toolkit';
import avalanche from '../../assets/avalanche.svg';

export const swapSlice = createSlice({
  name: 'swap',
  initialState: {
    swapFromToken: {
      name: 'Avalanche',
      symbol: 'AVAX',
      icon: avalanche,
      amount: '0.002638 AVAX',
    },
    swapToToken: null,
    isSelectTokenModalVisible: false,
    swapFrom: true,
  },
  reducers: {
    setSwapFromToken: (state, action) => {
      state.swapFromToken = action.payload;
      state.isSelectTokenModalVisible = false;
    },
    setSwapToToken: (state, action) => {
      state.swapToToken = action.payload;
      state.isSelectTokenModalVisible = false;
    },
    openSelectTokenModal: (state, action) => {
      state.swapFrom = action.payload.swapFrom;
      state.isSelectTokenModalVisible = true;
    },
    closeSelectTokenModal: (state, action) => {
      state.isSelectTokenModalVisible = false;
    },
    exchange: (state, action) => {
      if (!state.swapFromToken) {
        return;
      }

      if (!state.swapToToken) {
        return;
      }

      let swapFromToken = state.swapFromToken;
      let swapToToken = state.swapToToken;

      state.swapFromToken = swapToToken;
      state.swapToToken = swapFromToken;
    },
  },
});

export const {
  setSwapFromToken,
  setSwapToToken,
  openSelectTokenModal,
  closeSelectTokenModal,
  exchange,
} = swapSlice.actions;

export default swapSlice.reducer;
