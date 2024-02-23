import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer.jsx';

export default configureStore({
  reducer: reducer,
});