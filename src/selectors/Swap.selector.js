import _ from 'lodash';

export const selectSwapToToken = (state) => state.swap.swapToToken;
export const selectSwapFromToken = (state) => state.swap.swapFromToken;
export const selectSearchToken = (state) => state.swap.searchToken;

export const selectTokens = (state) =>
  state.swap.tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(state.swap.searchToken.toLowerCase()) &&
      (token.symbol !== _.get(state.swap.swapFromToken, 'symbol') &&
        token.symbol !== _.get(state.swap.swapToToken, 'symbol'))
  );
