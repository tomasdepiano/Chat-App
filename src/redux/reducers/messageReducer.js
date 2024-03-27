import * as actionTypes from '../actions/messageActions';

const initialState = {
  messages: [],
  // messageText: '',
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    //fetching Message
    case actionTypes.SET_MESSAGES:
      console.log('setmessages', action.payload);
      return {
        ...state,
        messages: action.payload,
      }
    case actionTypes.ADD_MESSAGES:
      console.log('state messages', ...state.messages);
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    //creating message
    // case actionTypes.CREATE_MESSAGES:
    //   return {
    //     ...state,
    //     messageText: ''
    //   }
    default:
      return state;
  }

}