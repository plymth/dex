import {
  CLOSE_SELECT_FROM_TOKEN_MODAL,
  CLOSE_SELECT_TO_TOKEN_MODAL,
  CLOSE_TRANSACTION_SETTINGS_MODAL,
  OPEN_SELECT_FROM_TOKEN_MODAL,
  OPEN_SELECT_TO_TOKEN_MODAL,
  OPEN_TRANSACTION_SETTINGS_MODAL,
  REMOVE_SWAP_FROM_TOKEN,
  REMOVE_SWAP_TO_TOKEN,
  SET_SWAP_FROM_TOKEN,
  SET_SWAP_FROM_TOKEN_AMOUNT,
  SET_SWAP_TO_TOKEN,
  SET_SWAP_TO_TOKEN_AMOUNT,
  SET_TOKEN_SEARCH,
  SWAP_TOKEN,
  SWITCH_TOKENS,
} from '../constants/Swap.constant';

export const setSwapFromToken = (token) => ({
  type: SET_SWAP_FROM_TOKEN,
  token,
});

export const setSwapToToken = (token) => ({
  type: SET_SWAP_TO_TOKEN,
  token,
});

export const removeSwapFromToken = () => ({
  type: REMOVE_SWAP_FROM_TOKEN,
});

export const removeSwapToToken = () => ({
  type: REMOVE_SWAP_TO_TOKEN,
});

export const setSwapFromTokenAmount = (amount) => ({
  type: SET_SWAP_FROM_TOKEN_AMOUNT,
  amount,
});

export const setSwapToTokenAmount = (amount) => ({
  type: SET_SWAP_TO_TOKEN_AMOUNT,
  amount,
});

export const openSelectFromTokenModal = () => ({
  type: OPEN_SELECT_FROM_TOKEN_MODAL,
});

export const openSelectToTokenModal = () => ({
  type: OPEN_SELECT_TO_TOKEN_MODAL,
});

export const closeSelectFromTokenModal = () => ({
  type: CLOSE_SELECT_FROM_TOKEN_MODAL,
});

export const closeSelectToTokenModal = () => ({
  type: CLOSE_SELECT_TO_TOKEN_MODAL,
});

export const setTokenSearch = (search) => ({
  type: SET_TOKEN_SEARCH,
  search,
});

export const switchTokens = () => ({
  type: SWITCH_TOKENS,
});

export const openTransactionSettingsModal = () => ({
  type: OPEN_TRANSACTION_SETTINGS_MODAL,
});

export const closeTransactionSettingsModal = () => ({
  type: CLOSE_TRANSACTION_SETTINGS_MODAL,
});

export const swapToken = () => ({
  type: SWAP_TOKEN,
});
