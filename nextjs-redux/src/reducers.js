// rootReducer.js

import { combineReducers } from 'redux';
import counterReducer from "./counterSlice"

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers if needed
});

export default rootReducer;
