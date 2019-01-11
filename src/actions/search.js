import * as ACTIONS from '../constants/search';
import * as service from '../service';

export const searchInit = () => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.INIT,
});

export const searchError = (error) => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.ERROR,
  paylaod: {
    error,
  },
});

export const searchSuccess = (data) => (dispatch) => dispatch({
  type: ACTIONS.SEARCH.SUCCESS,
  payload: {
    data,
  },
});

export const search = (q) => {
  return (dispatch) => {
    dispatch(searchInit());
    service.searchGifs(q)
      .then((resp) => dispatch(searchSuccess(resp)))
      .catch((err) => dispatch(searchError(resp)));
  };
};
