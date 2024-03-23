// import axios from 'axios';
import { SET_MESSAGES } from './actionTypes';

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