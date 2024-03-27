import * as actionTypes from '../actions/chatActions';

const initialState = {
  chats: [],
  selectedChatId: '',
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    //fetching chat
    case actionTypes.SET_CHATS:
      return {
        ...state,
        chats: action.payload
      }
    // create chat
    case actionTypes.CREATE_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      }
    case actionTypes.SELECTED_CHATID:
      return {
        ...state,
        selectedChatId: action.payload,
      };
    default:
      return state;
  }

}