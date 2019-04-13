import axios from 'axios';

import { getAccessToken, getRefreshToken, updateTokens, removeTokens } from './auth/token-utils';

const BASE_URL = 'https://intense-taiga-45666.herokuapp.com/';

const api = axios.create({
  baseURL: BASE_URL
});

api.interceptors.request.use(
  configs => {
    const accessToken = getAccessToken();
    if (accessToken) {
      configs.headers = {
        ...configs.headers,
        Authorization: `Bearer ${accessToken}`
      };
    }
    return configs;
  }
);

api.interceptors.response.use(
  response => response,
  reject => {
    if (reject.response.status === 401 || reject.response.status === 404) {
      const refreshToken = getRefreshToken();

      return axios.post('https://intense-taiga-45666.herokuapp.com/users/authentication', {
        grant_type: 'refresh_token',
        client_id: 'piggybank-app',
        refresh_token: refreshToken
      }).then(response => {
        updateTokens(response.data.access_token, response.data.refresh_token);
        return axios.request({
          ...reject.config,
          baseURL: 'https://intense-taiga-45666.herokuapp.com/',
          headers: {
            Authorization: `Bearer ${response.data.access_token}`
          }
        });
      }).catch(() => {
        removeTokens();
        window.location.replace('/login');
        return Promise.reject(reject);
      });
    }
    throw reject;
  }
);

export default api;
