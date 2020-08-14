import {
  GET_MUSIC,
  GET_ARTIST,
  GET_SEARCH_MUSIC,
  SHOW_LOADER,
  HIDE_LOADER,
  SUCCESS_ALEART,
  ERROR_ALEART,
  HIDE_ALEART,
  API_KEY,
} from "./types";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function successAleart() {
  return (dispatch) => {
    dispatch({
      type: SUCCESS_ALEART,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALEART,
      });
    }, 2000);
  };
}

export function errorAleart() {
  return (dispatch) => {
    dispatch({
      type: ERROR_ALEART,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALEART,
      });
    }, 2000);
  };
}

export function hideAleart() {
  return {
    type: HIDE_ALEART,
  };
}

export function getMusic() {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`
    );
    const json = await response.json();
    dispatch({ type: GET_MUSIC, payload: json });
    dispatch(hideLoader());
  };
}

export function getArtist(artist) {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`
    );
    const json = await response.json();
    dispatch({ type: GET_ARTIST, payload: json });
    dispatch(hideLoader());
  };
}

export function getSearchMusic(music) {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${music}&api_key=${API_KEY}&format=json`
    );
    const json = await response.json();
    dispatch({ type: GET_SEARCH_MUSIC, payload: json });
    dispatch(hideLoader());
  };
}