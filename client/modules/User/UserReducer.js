
import { SET_USER_LOCATION, SET_EVENT_TYPE, SET_UPDATED_STATUS } from './UserActions';

const initialState = {
  userLocation: 'Atlanta',
  eventType: 'sports',
  updated: false,
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOCATION:
      return Object.assign({}, state, { userLocation: action.payload });
    case SET_EVENT_TYPE:
      return Object.assign({}, state, { eventType: action.payload, updated: true });
    case SET_UPDATED_STATUS:
      return Object.assign({}, state, { updated: action.payload });
    default:
      return state;
  }
}
