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
    isSelectFromTokenModalVisible: false,
    isSelectToTokenModalVisible: false,
    tokens: tokens,
    modalCallback: null,
  },
  reducers: {
    setSwapFromToken: (state, action) => {
      state.swapFromToken = action.payload;
      state.isSelectFromTokenModalVisible = false;
    },

    setSwapToToken: (state, action) => {
      state.swapToToken = action.payload;
      state.isSelectToTokenModalVisible = false;
    },

    setSwapFromTokenAmount: (state, action) => {
      state.swapFromToken.amount = action.payload;
    },

    removeSwapFromToken: (state, action) => {
      state.swapFromToken = null;
    },

    setSwapToTokenAmount: (state, action) => {
      state.swapToToken.amount = action.payload;
    },

    removeSwapToToken: (state, action) => {
      state.swapToToken = null;
    },

    openSelectFromTokenModal: (state, action) => {
      state.isSelectFromTokenModalVisible = true;
    },

    openSelectToTokenModal: (state, action) => {
      state.isSelectToTokenModalVisible = true;
    },

    closeSelectFromTokenModal: (state, action) => {
      state.isSelectFromTokenModalVisible = false;
    },

    closeSelectToTokenModal: (state, action) => {
      state.isSelectToTokenModalVisible = false;
    },

    switchTokens: (state, action) => {
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
  openSelectFromTokenModal,
  openSelectToTokenModal,
  closeSelectFromTokenModal,
  closeSelectToTokenModal,
  switchTokens,
} = swapSlice.actions;

export default swapSlice.reducer;

export const selectTokens = (state) => {
  return state.swap.tokens.filter(
    (token) =>
      token.symbol !== _.get(state.swap.swapFromToken, 'symbol') &&
      token.symbol !== _.get(state.swap.swapToToken, 'symbol')
  );
};

export const selectIsSelectFromTokenModalVisible = (state) => state.swap.isSelectFromTokenModalVisible;
export const selectIsSelectToTokenModalVisible = (state) => state.swap.isSelectToTokenModalVisible;
export const selectSwapFromToken = (state) => state.swap.swapFromToken;
export const selectSwapToToken = (state) => state.swap.swapToToken;
export const selectCanSwapToken = (state) => !_.isEmpty(state.swap.swapFromToken) && !_.isEmpty(state.swap.swapToToken)
