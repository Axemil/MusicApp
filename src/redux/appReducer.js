import { SHOW_LOADER, HIDE_LOADER, SUCCESS_ALEART, ERROR_ALEART,HIDE_ALEART } from "./types";

const initialState = {
  loading: false,
  show: null
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SUCCESS_ALEART:
      return { ...state, show: true };
    case ERROR_ALEART:
      return { ...state, show: false };
    case HIDE_ALEART:
      return { ...state, show: null };
    default:
      return state;
  }
};
