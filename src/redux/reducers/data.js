import { CHANGE_LANGUAGE } from "redux/types";

const data = (state = { language: "en" }, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return Object.assign({}, state, { language: action.language });

    default:
      return state;
  }
};

export default data;
