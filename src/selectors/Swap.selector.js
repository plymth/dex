import _ from 'lodash';

export const selectTokens = (state) => state.swap.tokens;
export const selectSwapToToken = (state) => state.swap.swapToToken;
export const selectSwapFromToken = (state) => state.swap.swapFromToken;
