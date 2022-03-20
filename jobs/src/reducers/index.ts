import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { jobs } from "./jobsReducer";

export const reducers = combineReducers({
  auth,
  jobs,
});
