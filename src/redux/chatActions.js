import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SELECTED_CHATID, SET_CHATS } from './actionTypes';
// import * as actionTypes from './actionTypes';

// Action creator for fetching chats
export const fetchChats = (chats) => {

  return {
    type: SET_CHATS,
    payload: chats,
  }

};
export const setSelectedChatId = (chatId) => {
  return {
    type: SELECTED_CHATID,
    payload: chatId
  }
}