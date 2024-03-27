
//friends actions
export const SET_FRIENDS = 'SET_FRIENDS';
export const SET_FRIEND_USERNAME = 'SET_FRIEND_USERNAME';

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
