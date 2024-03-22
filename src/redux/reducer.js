
import * as actionTypes from './actionTypes';
const initialState = {
  user: '',
  userId: '',
  email: '',
  isLoggedIn: false,
  chats: [],
  messages: [],
  friendsList: [],
  selectedChatId: ''
};

// console.log('reducer message', actionTypes.SET_CHATS);

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.USER_LOGIN:
      // console.log('Action', action);
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.id,
        user: action.payload.username,
        email: action.payload.email,

      };
    case actionTypes.SET_CHATS:
      return {
        ...state,
        chats: action.payload,
      }
    case actionTypes.ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      }
    case actionTypes.SELECTED_CHATID:
      return {
        ...state,
        selectedChatId: action.payload,
      };
    case actionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      }
    case actionTypes.ADD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    case actionTypes.SET_FRIENDS:
      return {
        ...state,
        friendsList: action.payload,
      };

    // case 'SETTINGS_CHANGE_USER_NAME':
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     user: action.payload.username,
    //     email: action.payload.email,
    //   };
    case "USER_LOG_OUT":
      return initialState;
    default:
      return state;
  }
}
