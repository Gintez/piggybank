import uuid from 'uuid';

import { updateTokens } from '../auth/token-utils';
import { addSuccessNotification } from '../notifications/notifications-actions';

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
