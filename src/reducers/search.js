import * as ACTIONS from '../constants/search';

const initialState = {
  loading: false,
  error: '',
  searchType: 'gifs',
  data: [],
};

function search(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SEARCH.INIT:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.SEARCH.ERROR:
    case ACTIONS.SEARCH.SUCCESS:
    case ACTIONS.SEARCH.SELECT_TYPE:
      return {
        ...state,
        ...action.payload,
      };

    case ACTIONS.SEARCH.CLEAR:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
export default search;
