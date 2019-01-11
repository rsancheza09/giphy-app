import * as ACTIONS from '../constants/trending';
import * as service from '../service';

export const trendingInit = () => (dispatch) => dispatch({
  type: ACTIONS.TRENDING.INIT,
});

export const trendingError = (error) => (dispatch) => dispatch({
  type: ACTIONS.TRENDING.ERROR,
  paylaod: {
    error,
    loading: false,
  },
});

export const trendingSuccess = (data) => (dispatch) => dispatch({
  type: ACTIONS.TRENDING.SUCCESS,
  payload: {
    data,
    loading: false,
  },
});

export const getTrending = () => {
  return (dispatch) => {
    dispatch(trendingInit());
    service.getTrending()
      .then((resp) => dispatch(trendingSuccess(resp)))
      .catch((err) => dispatch(trendingError(err)));
  };
};
