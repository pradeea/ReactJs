import { combineReducers } from "redux";
import "../actions/index";

const dataReducer = () => {
  return [{ name: "PRADEEP" }, { city: "HYDERABAD" }];
};

const LoginReducer = (state = "", action) => {
  if (action.type === "NAME") {
    return (state = action.payload);
  }

  return state;
};

export default combineReducers({
  name: dataReducer,
  login: LoginReducer
});
