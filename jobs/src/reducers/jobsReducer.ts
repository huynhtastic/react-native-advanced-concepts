import { FETCH_JOBS } from "../actions/types";
import { Reducer } from "redux";

const INITIAL_STATE = {
  results: [],
};

export const jobs: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
};
