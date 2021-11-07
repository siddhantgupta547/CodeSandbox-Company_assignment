import axios from 'axios';
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER
} from '../actions/actionTypes';

// Action Generators of Movies and Language
export function fetchStart() {
  return {
    type: FETCH_MOVIES_START
  };
}

export function fetchData() {
  return async function (dispatch) {
    dispatch(fetchStart());
    try {
      const data = await axios.get(
        'https://peaceful-forest-62260.herokuapp.com/'
      );
      //console.log(data, data.data.languageList, data.data.moviesData);
      dispatch(fetchSuccess(data.data.moviesData, data.data.languageList));
    } catch (error) {
      dispatch(fetchFailure());
    }
  };
}

export function fetchSuccess(movies, languages) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies,
    languages
  };
}

export function fetchFailure() {
  return {
    type: FETCH_MOVIES_FAILURE
  };
}

/*-----------------------------------------------------------------------------------------------------------------*/

// Action Generators of filters

export function addFilter(value) {
  return {
    type: ADD_FILTER,
    value
  };
}

export function removeFilter(value) {
  return {
    type: REMOVE_FILTER,
    value
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER
  };
}