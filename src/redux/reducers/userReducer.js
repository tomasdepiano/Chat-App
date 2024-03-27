import * as actionTypes from '../actions/userActions';
const initialState = {
  user: '',
  userId: '',
  email: '',
  isLoggedIn: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.id,
        user: action.payload.username,
        email: action.payload.email,
      }
    case 'USER_LOGOUT':
      return initialState;
    default:
      return state;
  }

}