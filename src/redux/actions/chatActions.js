
//chat actions
export const SET_CHATS = 'SET_CHATS';
export const ADD_CHAT = 'ADD_CHAT';
export const SELECTED_CHATID = 'SELECTED_CHATID';
export const CREATE_CHAT = 'CREATE_CHAT';

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
export const createChat = (chat) => ({
  type: CREATE_CHAT,
  payload: chat,
})