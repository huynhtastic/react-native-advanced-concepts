import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { jobs } from "./jobsReducer";
import { likeJob } from "./likeReducer";

export const reducers = combineReducers({
  auth,
  jobs,
  likeJob,
});
