export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
import mockEvents from '../../assets/events.json';

import { setUpdatedStatus } from '../User/UserActions';

function getEventSuccess(events) {
  return {
    type: RECEIVE_EVENTS,
    payload: events,
  };
}

function loadEvents(city, type) {
  return new Promise((resolve) => {
    const filteredEvents = mockEvents.filter((event) => {
      return ((event.type === type) && (event.city === city));
    });
    resolve(filteredEvents);
  });
}

export function getEvents(city, type) {
  console.log(`getEvents ${city} ${type}`);
  return dispatch => {
    return loadEvents(city, type).then((events) => {
      dispatch(getEventSuccess(events));
    });
  };
}

