import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import search from './search';
import trending from './trending';

export default (history) => combineReducers({
  router: connectRouter(history),
  search,
  trending,
});
