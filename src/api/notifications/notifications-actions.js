import uuid from 'uuid';
import { pathOr } from 'ramda';

import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION,
  ERROR_NOTIFICATION,
  SUCCESS_NOTIFICATION
} from './notifications-constants';

export const addNotification = data => dispatch => dispatch({ type: ADD_NOTIFICATION, payload: data });
export const removeNotification = id => dispatch => dispatch({ type: REMOVE_NOTIFICATION, payload: id });
export const addErrorNotification = data => addNotification({ ...data, type: ERROR_NOTIFICATION });
export const addSuccessNotification = data => addNotification({ ...data, type: SUCCESS_NOTIFICATION });
export const setupErrorInterceptor = (api, dispatch) => {
  api.interceptors.response.use(
    response => {
      return response;
    },
    (error) => {
      if (error.response.config.bypassErrorsInterceptor) return Promise.reject(error);
      if (pathOr(false, ['response', 'data', 'error.response'])) {
        dispatch(addErrorNotification({
          text: error.response.data.error_message,
          id: uuid()
        }));
      }
      return Promise.reject(error);
    }
  );
};
