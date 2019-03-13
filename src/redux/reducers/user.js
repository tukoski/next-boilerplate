import { combineReducers } from "redux";
import { USER_LOGIN, USER_LOGOUT, SET_PROFILE } from "redux/types";

const authenticated = (state = false, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return true;

    case USER_LOGOUT:
      return false;

    default:
      return state;
  }
};

const data = (state = null, action = {}) => {
  switch (action.type) {
    case USER_LOGIN:
      return action.data;

    case USER_LOGOUT:
      return null;

    case SET_PROFILE:
      return action.data;

    default:
      return state;
  }
};

const user = combineReducers({
  authenticated,
  data
});

export default user;
