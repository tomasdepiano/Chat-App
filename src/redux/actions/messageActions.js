
//message actons
export const SET_MESSAGES = 'SET_MESSAGES';
export const ADD_MESSAGES = 'ADD_MESSAGES';
export const CREATE_MESSAGES = 'CREATE_MESSAGES';

//getting messages
export const fetchMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    payload: messages
  }
};

//creating messages
export const createMessage = (message) => {
  return {
    type: ADD_MESSAGES,
    payload: message
  }
};