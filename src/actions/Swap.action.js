import {
  REMOVE_TOKEN,
  SET_TOKEN,
  SET_TOKEN_AMOUNT,
  SWITCH_TOKENS,
} from '../constants/Swap.constant';

export const setToken = (token, type) => ({
  type: SET_TOKEN,
  payload: { token, type },
});

export const setTokenAmount = (amount, type) => ({
  type: SET_TOKEN_AMOUNT,
  payload: { amount, type },
});

export const removeToken = (type) => ({
  type: REMOVE_TOKEN,
  payload: { type },
});

export const switchTokens = () => ({
  type: SWITCH_TOKENS,
});
