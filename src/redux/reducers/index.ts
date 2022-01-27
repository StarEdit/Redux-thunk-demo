import { combineReducers } from "redux";
import bankReducer from "./bankReducer";
import postReducer from "./postReducer";

const reducers = combineReducers({
  bank: bankReducer,
  post: postReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
