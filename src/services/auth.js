
export const TOKEN_KEY =('token');
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null || undefined;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
  localStorage.getItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};