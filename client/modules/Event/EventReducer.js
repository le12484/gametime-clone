import { RECEIVE_EVENTS } from './EventActions';

const initialState = {
  data: [],
};

export default function EventReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return Object.assign({}, { data: action.payload });
    default:
      return state;
  }
}


