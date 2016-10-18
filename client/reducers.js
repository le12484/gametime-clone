/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import user from './modules/User/UserReducer';
import events from './modules/Event/EventReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  events,
  user,

});
