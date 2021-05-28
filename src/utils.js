const utils = {
  getUserName: () => {
    return localStorage.getItem('username');
  },
  setUsername: (username) => {
    localStorage.setItem('username', username);
  },
};
export default utils;
