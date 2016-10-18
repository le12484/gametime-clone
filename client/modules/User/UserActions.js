
export const SET_USER_LOCATION = 'SET_USER_LOCATION';
export const SET_EVENT_TYPE = 'SET_EVENT_TYPE';
export const SET_UPDATED_STATUS = 'SET_UPDATED_STATUS';

export function setUserLocation(city) {
  return {
    type: SET_USER_LOCATION,
    payload: city,
  };
}

export function setEventType(type) {
  return {
    type: SET_EVENT_TYPE,
    payload: type,
  };
}

export function setUpdatedStatus(status) {
  return {
    type: SET_UPDATED_STATUS,
    payload: status,
  };
}
