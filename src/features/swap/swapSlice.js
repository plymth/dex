import { createSlice } from '@reduxjs/toolkit';
import avalanche from '../../assets/avalanche.svg';
import tokens from '../../data/tokens';
import _ from 'lodash';

export const swapSlice = createSlice({
  name: 'swap',
  initialState: {
    swapFromToken: {
      name: 'Avalanche',
      symbol: 'AVAX',
      icon: avalanche,
      amount: null,
    },
    swapToToken: null,
    isSelectTokenModalVisible: false,
    tokens: tokens,
    modalCallback: null,
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

    setSwapFromTokenAmount: (state, action) => {
      state.swapFromToken.amount = action.payload;
    },

    removeSwapFromToken: (state, action) => {
      state.swapFromToken = null;
    },

    setSwapToTokenAmount: (state, action) => {
      state.swapToToken.amount = action.payload;
      state.isSelectTokenModalVisible = false;
    },

    removeSwapToToken: (state, action) => {
      state.swapToToken = null;
    },

    openSelectTokenModal: (state, action) => {
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

export default swapSlice.reducer;

export const selectTokens = (state) => {
  return state.swap.tokens.filter(
    (token) =>
      token.symbol != _.get(state.swap.swapFromToken, 'symbol') &&
      token.symbol != _.get(state.swap.swapToToken, 'symbol')
  );
};
