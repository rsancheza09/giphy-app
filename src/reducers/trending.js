import * as ACTIONS from '../constants/trending';

const initialState = {
  loading: false,
  error: '',
  data: [],
};

function trending(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TRENDING.INIT:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.TRENDING.ERROR:
    case ACTIONS.TRENDING.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
export default trending;
