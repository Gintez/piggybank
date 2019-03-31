import { remove, append, assoc, uniqBy } from 'ramda';

import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './notifications-constants';

const DEFAULT_STATE = {
  notifications: []
};

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_NOTIFICATION:
      return assoc('notifications', uniqBy(val => val.id, append(payload, state.notifications)), state);
    case REMOVE_NOTIFICATION:
      return assoc('notifications', remove(notification => notification.id === payload, state.notifications), state);
    default:
      return state;
  }
};

export default reducer;
