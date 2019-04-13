export const createAccount = data => async (dispatch, _, { api, history }) => {
  await api.post('/accounts', data);
  history.push('/dashboard');
};
