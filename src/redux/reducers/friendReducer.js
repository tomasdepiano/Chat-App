import * as actionTypes from '../actions/friendsActions';

const initialState = {
  friendsList: [],
  friendUsername: '',
};

export default function friendReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_FRIENDS:
      return {
        ...state,
        friendsList: action.payload,
      };
    case actionTypes.SET_FRIEND_USERNAME:
      return {
        ...state,
        friendUsername: action.payload.username
      }
    default:
      return state;
  }

}