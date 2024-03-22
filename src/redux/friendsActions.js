import axios from 'axios';
import { SET_FRIENDS } from './actionTypes.js';
export const fetchFriends = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/allUsers');
    dispatch({
      type: SET_FRIENDS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching friends:', error);
  }
};