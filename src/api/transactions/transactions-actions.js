export const getTransactions = () => async (dispatch, _, { api }) => {
  const { data } = await api.get('/transactions');
  console.log(data);
};
