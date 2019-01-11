import * as ACTIONS from '../constants/search';

const initialState = {
  loading: false,
  error: '',
};

function search(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH.INIT:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.SEARCH.ERROR:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    case ACTIONS.SEARCH.SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
export default search;
