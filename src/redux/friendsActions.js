
import { SET_FRIENDS, SET_FRIEND_USERNAME } from './actionTypes.js';
export const fetchFriends = (friendsList) => {


  return {
    type: SET_FRIENDS,
    payload: friendsList,
  };

};

export const setFriendUsername = (friend) => {
  return {
    type: SET_FRIEND_USERNAME,
    payload: friend
  }
}
