import _ from 'lodash';

export const selectSwapFromToken = (state) => state.swap.swapFromToken;
export const selectSwapToToken = (state) => state.swap.swapToToken;

export const selectIsSelectFromTokenModalOpen = (state) =>
  state.swap.isSelectFromTokenModalOpen;

export const selectIsSelectToTokenModalOpen = (state) =>
  state.swap.isSelectToTokenModalOpen;

export const selectTokenSearch = (state) => state.swap.tokenSearch;

export const selectTokens = (state) => {
  return state.swap.tokens.filter(
    (token) =>
      token.symbol !== _.get(state.swap.swapFromToken, 'symbol') &&
      token.symbol !== _.get(state.swap.swapToToken, 'symbol') &&
      token.name.toLowerCase().includes(state.swap.tokenSearch.toLowerCase())
  );
};

export const selectCanSwapToken = (state) => {
  return (
    _.get(state.swap.swapFromToken, 'amount') &&
    _.get(state.swap.swapToToken, 'amount')
  );
};
