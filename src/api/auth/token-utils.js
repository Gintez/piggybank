export const ACCESS_TOKEN = 'accessToken';
export const REFREASH_TOKEN = 'refreshToken';

export const updateTokens = (token, refreshToken) => {
  window.localStorage.setItem(ACCESS_TOKEN, token);
  window.localStorage.setItem(REFREASH_TOKEN, refreshToken);
};
export const removeToken = () => window.localStorage.removeItem(ACCESS_TOKEN);
export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);
export const getRefreshToken = () => window.localStorage.getItem(REFREASH_TOKEN);
