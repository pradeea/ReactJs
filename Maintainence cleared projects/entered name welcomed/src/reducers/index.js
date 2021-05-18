import { combineReducers } from "redux";
import "../actions/index";

const dataReducer = () => {
  return [{ name: "PRADEEP" }, { city: "HYDERABAD" }];
};

const LoginReducer = (enterdValue = "ur excellency", action) => {
  if (action.type === "NAME") {
    return action.payload;
  }

  return enterdValue;
};

export default combineReducers({
  name: dataReducer,
  login: LoginReducer
});
