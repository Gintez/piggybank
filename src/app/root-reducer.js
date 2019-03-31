import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

import { notificationReducer, NAME as notificationName } from 'api/notifications';

const rootReducers = history => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  [notificationName]: notificationReducer
});

export default rootReducers;
