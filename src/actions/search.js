import * as ACTIONS from '../constants/search';
import * as service from '../service';

export const searchInit = () => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.INIT,
});

export const searchError = (error) => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.ERROR,
  paylaod: {
    error,
    loading: false,
  },
});

export const searchSuccess = (data) => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.SUCCESS,
  payload: {
    data,
    loading: false,
  },
});

export const selectSearchType = (searchType) => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.SELECT_TYPE,
  payload: {
    searchType,
  },
});

export const clearSearch = () => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.CLEAR,
});

export const search = (q) => {
  return (dispatch, getState) => {
    dispatch(searchInit());
    if (getState().search.searchType === 'gifs') {
      service.searchGifs({ q })
        .then((resp) => dispatch(searchSuccess(resp)))
        .catch((err) => dispatch(searchError(err)));
    } else {
      service.searchStickers({ q })
        .then((resp) => dispatch(searchSuccess(resp)))
        .catch((err) => dispatch(searchError(err)));
    }
  };
};
