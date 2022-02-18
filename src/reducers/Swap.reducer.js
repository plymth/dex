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
  SWITCH_TOKENS,
} from '../constants/Swap.constant';
import avalanche from '../assets/avalanche.svg';
import tokens from '../data/tokens';

const initialState = {
  swapFromToken: {
    name: 'Avalanche',
    symbol: 'AVAX',
    icon: avalanche,
    amount: null,
  },
  tokenSearch: '',
  swapToToken: null,
  isSelectFromTokenModalOpen: false,
  isSelectToTokenModalOpen: false,
  isTransactionSettingsModalOpen: false,
  tokens: tokens,
};

export const swapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SWAP_FROM_TOKEN: {
      return {
        ...state,
        swapFromToken: action.token,
        isSelectFromTokenModalOpen: false,
        tokenSearch: '',
      };
    }

    case SET_SWAP_TO_TOKEN: {
      return {
        ...state,
        swapToToken: action.token,
        isSelectToTokenModalOpen: false,
        tokenSearch: '',
      };
    }

    case SET_SWAP_FROM_TOKEN_AMOUNT: {
      return {
        ...state,
        swapFromToken: { ...state.swapFromToken, amount: action.amount },
      };
    }

    case SET_SWAP_TO_TOKEN_AMOUNT: {
      return {
        ...state,
        swapToToken: { ...state.swapToToken, amount: action.amount },
      };
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

    case OPEN_SELECT_FROM_TOKEN_MODAL: {
      return { ...state, isSelectFromTokenModalOpen: true };
    }

    case OPEN_SELECT_TO_TOKEN_MODAL: {
      return { ...state, isSelectToTokenModalOpen: true };
    }

    case CLOSE_SELECT_FROM_TOKEN_MODAL: {
      return { ...state, isSelectFromTokenModalOpen: false };
    }

    case CLOSE_SELECT_TO_TOKEN_MODAL: {
      return { ...state, isSelectToTokenModalOpen: false };
    }

    case SET_TOKEN_SEARCH: {
      return { ...state, tokenSearch: action.search };
    }

    case REMOVE_SWAP_FROM_TOKEN: {
      return { ...state, swapFromToken: null };
    }

    case REMOVE_SWAP_TO_TOKEN: {
      return { ...state, swapToToken: null };
    }

    case OPEN_TRANSACTION_SETTINGS_MODAL: {
      return { ...state, isTransactionSettingsModalOpen: true };
    }

    case CLOSE_TRANSACTION_SETTINGS_MODAL: {
      return { ...state, isTransactionSettingsModalOpen: false };
    }

    default:
      return state;
  }
};
