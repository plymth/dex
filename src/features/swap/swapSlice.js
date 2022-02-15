import { createSlice } from '@reduxjs/toolkit';
import avalanche from '../../assets/avalanche.svg';
import tokens from '../../data/tokens';

export const swapSlice = createSlice({
  name: 'swap',
  initialState: {
    swapFromToken: {
      name: 'Avalanche',
      symbol: 'AVAX',
      icon: avalanche,
      amount: 0,
    },
    swapToToken: null,
    isSelectTokenModalVisible: false,
    swapFrom: true,
    tokens: tokens
  },
  reducers: {
    setSwapFromToken: (state, action) => {
      state.swapFromToken = action.payload;
      state.isSelectTokenModalVisible = false;
    },

    setSwapFromTokenAmount: (state, action) => {
      state.swapFromToken.amount = action.payload;
    },

    removeSwapFromToken: (state, action) => {
      state.swapFromToken = null;
    },

    setSwapToToken: (state, action) => {
      state.swapToToken = action.payload;
      state.isSelectTokenModalVisible = false;
    },

    setSwapToTokenAmount: (state, action) => {
      state.swapToToken.amount = action.payload;
    },

    removeSwapToToken: (state, action) => {
      state.swapToToken = null;
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
  setSwapFromTokenAmount,
  setSwapToTokenAmount,
  removeSwapFromToken,
  removeSwapToToken,
  openSelectTokenModal,
  closeSelectTokenModal,
  exchange,
} = swapSlice.actions;

//export const selectTokens = state => state.swap.tokens;

// Define a selector for tokens

export default swapSlice.reducer;
