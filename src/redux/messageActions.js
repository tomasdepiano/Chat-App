// import axios from 'axios';
import { SET_MESSAGES } from './actionTypes';

export const fetchMessages = (messages) => {


  return {
    type: SET_MESSAGES,
    payload: messages
  }

};