import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer.js";
import chatReducer from "./reducers/chatReducer.js";
import messageReducer from "./reducers/messageReducer.js";
import friendReducer from "./reducers/friendReducer.js";
// import reducer from './reducer.js';


const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
  message: messageReducer,
  friend: friendReducer,
})
const store = configureStore({ reducer: rootReducer });
export default store;