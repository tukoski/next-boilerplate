import { combineReducers } from "redux";
import user from "./user";
import data from "./data";

export const rootReducer = combineReducers({
  user,
  data
});

export default rootReducer;
