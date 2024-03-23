
import { SET_FRIENDS } from './actionTypes.js';
export const fetchFriends = (friendsList) => {


  return {
    type: SET_FRIENDS,
    payload: friendsList,
  };

};
