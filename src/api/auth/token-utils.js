export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';

export const updateTokens = (token, refreshToken) => {
  window.localStorage.setItem(ACCESS_TOKEN, token);
  window.localStorage.setItem(REFRESH_TOKEN, refreshToken);
};
export const removeTokens = () => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.localStorage.removeItem(REFRESH_TOKEN);
};
export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);
export const getRefreshToken = () => window.localStorage.getItem(REFRESH_TOKEN);
