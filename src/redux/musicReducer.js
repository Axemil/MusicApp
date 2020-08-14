import { GET_MUSIC, GET_ARTIST, GET_SEARCH_MUSIC } from "./types";

const initialState = {
  arrayMusic: [],
  artist: {},
  searchMusic: [],
};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC: return { ...state, arrayMusic: action.payload }
    case GET_ARTIST: return { ...state, artist: action.payload }
    case GET_SEARCH_MUSIC: return { ...state, searchMusic: action.payload }
    default:
      return state;
  }
};
