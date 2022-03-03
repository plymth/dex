import {
  REMOVE_TOKEN,
  SET_SEARCH_TOKEN,
  SET_TOKEN,
  SET_TOKEN_AMOUNT,
  SWITCH_TOKENS,
} from '../constants/Swap.constant';
import avalanche from '../assets/avalanche.svg';
import tokens from '../data/tokens';

const initialState = {
  tokens,
  searchToken: '',
  swapFromToken: {
    name: 'Avalanche',
    symbol: 'AVAX',
    icon: avalanche,
    amount: '',
  },
  swapToToken: null,
};

export const swapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      if (action.payload.type === 'swapFrom') {
        return {
          ...state,
          swapFromToken: action.payload.token,
          searchToken: '',
        };
      }
      if (action.payload.type === 'swapTo') {
        return {
          ...state,
          swapToToken: action.payload.token,
          searchToken: '',
        };
      }
      break;
    }

    case SET_TOKEN_AMOUNT: {
      if (action.payload.type === 'swapFrom') {
        return {
          ...state,
          swapFromToken: {
            ...state.swapFromToken,
            amount: action.payload.amount,
          },
        };
      }
      if (action.payload.type === 'swapTo') {
        return {
          ...state,
          swapToToken: { ...state.swapToToken, amount: action.payload.amount },
        };
      }
      break;
    }

    case REMOVE_TOKEN: {
      if (action.payload.type === 'swapFrom') {
        return {
          ...state,
          swapFromToken: null,
        };
      }
      if (action.payload.type === 'swapTo') {
        return {
          ...state,
          swapToToken: null,
        };
      }
      break;
    }

    case SWITCH_TOKENS: {
      if (!state.swapFromToken) {
        return state;
      }

      if (!state.swapToToken) {
        return state;
      }

      return {
        ...state,
        swapFromToken: state.swapToToken,
        swapToToken: state.swapFromToken,
      };
    }

    case SET_SEARCH_TOKEN: {
      return {
        ...state,
        searchToken: action.payload.searchToken,
      };
    }

    default:
      return state;
  }
};
