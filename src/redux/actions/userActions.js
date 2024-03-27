
//user actions
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const setUser = (user) => {
  return {
    type: 'USER_LOGIN',
    payload: user
  }
}

export const logoutUser = () => {
  return {
    type: 'USER_LOGOUT',
  }
}
