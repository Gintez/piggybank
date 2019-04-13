import queryString from 'query-string';
import uuid from 'uuid';

import { addSuccessNotification } from '../notifications/notifications-actions';
import { removeTokens, updateTokens } from './token-utils';

export const signUp = data => async (dispatch, _, { api, history }) => {
  await api.post('/users', data);
  history.push('/sign-up/success');
};

export const verifyEmail = (data) => async (dispatch, _, { api, history }) => {
  const stringified = queryString.stringify(data);
  try {
    const { data } = await api.get(`/users/activation?${stringified}`);
    updateTokens(data.token);
    history.push('/dashboard');
  } catch (e) {
    history.push('/');
  }
};

export const login = ({ email, password }) => async (dispatch, _, { api, history }) => {
  const { data } = await api.post('/users/authentication', {
    password,
    email,
    grant_type: 'password',
    client_id: 'piggybank-app'
  });
  updateTokens(data.access_token, data.refresh_token);
  history.push('/dashboard');
};

export const logout = () => async (dispatch, _, { api, history }) => {
  await api.delete('/users/authentication');
  removeTokens();
  history.push('/');
};

export const fieldValidation = ({ email, username }) => async (dispatch, _, { api, history }) =>
  api.post('/users/field/validation', { email, username }, { bypassErrorsInterceptor: true });

export const changePassword = ({ data, id }) => async (dispatch, _, { api, history }) => {
  const { data: tokens } = await api.put(`/password_resets/${id}`, data);
  updateTokens(tokens.access_token, tokens.refresh_token);
  history.push('/dashboard');
  dispatch(addSuccessNotification({ text: 'Your password successfully updated', id: uuid() }));
};

export const resetPassword = (data) => async (dispatch, _, { api, history }) => {
  await api.post('/password_resets', data);
  history.push('/reset-password/success');
};
